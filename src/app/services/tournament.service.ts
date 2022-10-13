import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Tournament } from '../core/models/models';

@Injectable({
    providedIn: 'root',
})
export class TournamentService {
    tournamentCollection: AngularFirestoreCollection<Tournament>;
    tournaments: Observable<Tournament[]>;
    db: AngularFirestore;

    constructor(public fb: AngularFirestore) {
        this.db = fb;
        this.tournamentCollection = fb.collection<Tournament>('Tournaments');

        this.tournaments = this.tournamentCollection.snapshotChanges().pipe(
            map((actions) =>
                actions.map((a) => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { ...data, id };
                })
            )
        );
    }

    getTournament(id: string) {
        const itemRef = this.db.doc<Tournament>(`/Tournaments/` + id);
        let tournament = itemRef.snapshotChanges().pipe(
            map((a) => {
                const data = a.payload.data();
                const id = a.payload.id;
                return { ...data, id };
            })
        );
        return tournament;
    }

    getAllTournaments() {
        return this.db
            .collection<Tournament>(`/Tournaments`)
            .snapshotChanges()
            .pipe(
                map((actions) =>
                    actions.map((a) => {
                        const data = a.payload.doc.data();
                        const id = a.payload.doc.id;
                        return { ...data, id };
                    })
                )
            );
    }

    async createTournament(torunament: any) {
        const id = this.db.createId();
        let newTournament = { ...torunament, id }
        // const res = await this.gameCollection.add(newGame)
        await this.tournamentCollection.doc(id).set(newTournament);
        return newTournament;
    }

}
