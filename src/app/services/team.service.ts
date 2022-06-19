import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Team } from '../core/models/models';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teamCollection: AngularFirestoreCollection<Team>;
  teams: Observable<Team[]>;
  db: AngularFirestore;

  constructor(public fb: AngularFirestore) {
    this.db = fb;
    this.teamCollection = fb.collection<Team>('Teams');

    this.teams = this.teamCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Team;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getTeam(id: string) {
    const itemRef = this.db.doc<Team>(`/Teams/` + id);
    let team = itemRef.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data() as Team;
        const id = a.payload.id;
        return { ...data, id };
      })
    );
    return team;
  }

  getTeamByName(name: string) {
    let teams = this.db.collection<Team>('Teams', (ref) =>
      ref.where('name', '==', name).limit(1)
    );
    return teams.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Team;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getAllTeams() {
    return this.db
      .collection<Team>(`/Teams`)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Team;
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }


  async createTeam(team: Team) {
    // const id = this.db.createId();
    // const newLeague = { ...team, id }

    // await this.teamCollection.doc(id).set(newLeague);
    // return newLeague;
    console.log(team)
    const res = await this.teamCollection.add(team);
    return res.id ? res.id : '';
  }

  // setTeamPlayersId(idTeam: string, idPlayer1: string, idPlayer2: string) {
  //     try {
  //         this.teamCollection.doc(idTeam).update({ idPlayer1: idPlayer1, idPlayer2: idPlayer2 })
  //     }
  //     catch (err) {
  //         console.log(err)
  //     }
  // }
}
