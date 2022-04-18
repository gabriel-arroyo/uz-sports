import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Score } from '../core/models/score';
import * as dayjs from "dayjs";
import { Game } from '../core/models/game';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    scoreCollection: AngularFirestoreCollection<Score>;
    db: AngularFirestore;

    constructor(public fb: AngularFirestore) {
        this.db = fb;
        this.scoreCollection = fb.collection<Score>("Scores");
    }

    getScore(id: string) {
        const itemRef = this.db.doc<Score>(`/Scores/` + id);
        let score = itemRef.snapshotChanges()
            .pipe(
                map(a => {
                    const data = a.payload.data() as Score
                    const id = a.payload.id;
                    return { id, ...data };
                })
            )
        return score;
    }

    getPoints(idScore: string) {
        const itemRef = this.db.doc<Score>(`/Scores/${idScore}/points`);
        let score = itemRef.snapshotChanges()
            .pipe(
                map(a => {
                    const data = a.payload.data() as Score
                    const id = a.payload.id;
                    return { id, ...data };
                })
            )
        return score;
    }

    getScoreBySchedule(date: string, time: string) {
        let games = this.db.collection<Score>("Scores", ref =>
            ref
                .where('date', '==', date)
                .where('time', '==', time)
                .limit(1));
        return games.snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Score;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                }
                ))
            )
    }

    getScoreByIdGameAndTeam(idGame: string, idTeam: string) {
        let scores = this.db.collection<Score>("Scores", ref =>
            ref
                .where('idGame', '==', idGame)
                .where('idTeam', '==', idTeam)
                .limit(1)
        );
        return scores.snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Score;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                }
                ))
            )
    }

    createScore(game: Game, team: number) {
        if (team === 1 && !game.idTeam1) return ''
        const id = this.db.createId();
        const score = {
            id: id,
            idTeam: team === 1 ? game.idTeam1 : game.idTeam2,
            idGame: game.id,
            date: game.date,
            time: game.time,
            fouls: [],
            points: [],
            quarter: 1,
            extraquarter: 0,
        }
        this.scoreCollection.doc(id).set(score)
        return id;
    }


}