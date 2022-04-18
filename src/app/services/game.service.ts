import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Game } from '../core/models/game';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    gameCollection: AngularFirestoreCollection<Game>;
    games: Observable<Game[]>
    db: AngularFirestore;

    constructor(public fb: AngularFirestore) {
        this.db = fb;
        this.gameCollection = fb.collection<Game>("Games");

        this.games = this.gameCollection.snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Game;
                    const id = a.payload.doc.id;
                    return { ...data, id };
                }

                ))
            )
    }

    getGame(id: string) {
        const itemRef = this.db.doc<Game>(`/Games/` + id);
        let game = itemRef.snapshotChanges()
            .pipe(
                map(a => {
                    const data = a.payload.data() as Game
                    const id = a.payload.id;
                    return { ...data, id };
                })
            )
        return game;
    }

    getGameBySchedule(date: string, time: string) {
        let games = this.db.collection<Game>("Games", ref =>
            ref
                .where('date', '==', date)
                .where('time', '==', time)
                .limit(1));
        return games.snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Game;
                    const id = a.payload.doc.id;
                    return { ...data, id };
                }
                ))
            )
    }


    createScore(game: Game) {
        this.gameCollection.add(game)
            .then(res => {
                console.log('juego agregado', res)
            })
            .catch(e => {
                console.log(e)
            })
    }

    setGameScoresId(idGame: string, idScore1: string, idScore2: string) {
        try {
            this.gameCollection.doc(idGame).update({ idScore1: idScore1, idScore2: idScore2 })
        }
        catch (err) {
            console.log(err)
        }
    }
}