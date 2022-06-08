import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { News } from '../core/models/models';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsCollection: AngularFirestoreCollection<News>;
  news: Observable<News[]>;
  db: AngularFirestore;

  constructor(public fb: AngularFirestore) {
    this.db = fb;
    this.newsCollection = fb.collection<News>('News');

    this.news = this.newsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as News;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getNews(id: string) {
    const itemRef = this.db.doc<News>(`/News/` + id);
    let team = itemRef.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data() as News;
        const id = a.payload.id;
        return { ...data, id };
      })
    );
    return team;
  }

  getNewsByLeague(idLeague: string) {
    let teams = this.db.collection<News>('News', (ref) =>
      ref.where('idLeague', '==', idLeague).limit(10)
    );
    return teams.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as News;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  async createNews(news: News) {
    const res = await this.newsCollection.add(news);
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
