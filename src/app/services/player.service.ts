import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Player } from '../core/models/player';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    playerCollection: AngularFirestoreCollection<Player>;
    players: Observable<Player[]>
    db: AngularFirestore;

    constructor(public fb: AngularFirestore) {
        this.db = fb;
        this.playerCollection = fb.collection<Player>("Players");

        this.players = this.playerCollection.snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Player;
                    const id = a.payload.doc.id;
                    return { ...data, id };
                }

                ))
            )
    }

    getPlayer(id: string) {
        const itemRef = this.db.doc<Player>(`/Players/` + id);
        let player = itemRef.snapshotChanges()
            .pipe(
                map(a => {
                    const data = a.payload.data() as Player
                    const id = a.payload.id;
                    return { ...data, id };
                })
            )
        return player;
    }

    getPlayerByName(name: string) {
        let players = this.db.collection<Player>("Players", ref =>
            ref
                .where('name', '==', name)
                .limit(1));
        return players.snapshotChanges()
            .pipe(
                map(actions => actions.map(a => {
                    const data = a.payload.doc.data() as Player;
                    const id = a.payload.doc.id;
                    return { ...data, id };
                }
                ))
            )
    }


    createPlayer(player: Player) {
        this.playerCollection.add(player)
            .then(res => {
                console.log('juego agregado', res)
            })
            .catch(e => {
                console.log(e)
            })
    }

    // setPlayerPlayersId(idPlayer: string, idPlayer1: string, idPlayer2: string) {
    //     try {
    //         this.playerCollection.doc(idPlayer).update({ idPlayer1: idPlayer1, idPlayer2: idPlayer2 })
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }
}