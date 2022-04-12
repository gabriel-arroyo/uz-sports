import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Item } from '../models/Item';
import { take } from 'rxjs/operators';
import { Game } from '../models/game';
import { stringify } from 'querystring';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    gameCollection: AngularFirestoreCollection<Game>;
    game: Observable<Game[]>

    constructor(public db: AngularFirestore) {
        this.gameCollection = db.collection<Game>("Games");
        this.game = this.gameCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Game;
                const id = a.payload.doc.id;
                return { id, ...data };
            }

            ))
        )
    }

    getGame() {
        return this.game;
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
}