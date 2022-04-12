import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Item } from '../models/Item';
import { take } from 'rxjs/operators';
import { Score } from '../models/score';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    scoreCollection: AngularFirestoreCollection<Score>;
    score: Observable<Score[]>

    constructor(public db: AngularFirestore) {
        this.scoreCollection = db.collection<Item>("Scores");
        this.score = this.scoreCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Score;
                const id = a.payload.doc.id;
                return { id, ...data };
            }

            ))
        )
    }

    getScore() {
        return this.score;
    }

    createScore() {
        this.scoreCollection.add({
            date: "22/04/01",
            extraquarter: 0,
            fouls: [],
            idTeam: "2",
            points: [],
            quarter: 1,
            teamName: "equipo2",
            time: "11:00",
        })
            .then(res => {
                console.log('score agregado', res)
            })
            .catch(e => {
                console.log(e)
            })
    }
}