import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { User } from '../core/models/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  db: AngularFirestore;

  constructor(public fb: AngularFirestore) {
    this.db = fb;
    this.usersCollection = fb.collection<User>('Users');

    this.users = this.usersCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getUser(id: string) {
    const itemRef = this.db.doc<User>(`/Users/` + id);
    let user = itemRef.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data() as User;
        const id = a.payload.id;
        return { ...data, id };
      })
    );
    return user;
  }

  getAllUsers() {
    return this.db
      .collection<User>(`/Users`)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as User;
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }

  getTeamUsers(idTeam: string) {
    let users = this.db.collection<User>('Users', (ref) =>
      ref.where('idTeams', 'array-contains', idTeam).orderBy('name').limit(100)
    );
    return users.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getUserByName(name: string) {
    let users = this.db.collection<User>('Users', (ref) =>
      ref.where('name', '==', name).limit(1)
    );
    return users.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  createUser(user: User): string {
    let id = '';
    this.usersCollection
      .add(user)
      .then((res) => {
        console.log('usuario agregado', res);
        id = res.id;
      })
      .catch((e) => {
        console.log(e);
      });
    return id;
  }

  // setUserUsersId(idUser: string, idUser1: string, idUser2: string) {
  //     try {
  //         this.usersCollection.doc(idUser).update({ idUser1: idUser1, idUser2: idUser2 })
  //     }
  //     catch (err) {
  //         console.log(err)
  //     }
  // }
}
