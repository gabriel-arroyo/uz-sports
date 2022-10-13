import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { League } from '../core/models/models';

@Injectable({
    providedIn: 'root',
})
export class LeagueService {
    leagueCollection: AngularFirestoreCollection<League>;
    leagues: Observable<League[]>;
    db: AngularFirestore;

    constructor(public fb: AngularFirestore) {
        this.db = fb;
        this.leagueCollection = fb.collection<League>('Leagues');

        this.leagues = this.leagueCollection.snapshotChanges().pipe(
            map((actions) =>
                actions.map((a) => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { ...data, id };
                })
            )
        );
    }

    getLeague(id: string) {
        const itemRef = this.db.doc<League>(`/Leagues/` + id);
        let league = itemRef.snapshotChanges().pipe(
            map((a) => {
                const data = a.payload.data();
                const id = a.payload.id;
                return { ...data, id };
            })
        );
        return league;
    }

    getAllLeagues() {
        return this.db
            .collection<League>(`/Leagues`)
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


    async createLeague(league: any) {
        const id = this.db.createId();
        const newLeague = { ...league, id }

        // const res = await this.gameCollection.add(newGame)
        await this.leagueCollection.doc(id).set(newLeague);
        return newLeague;
    }

}
