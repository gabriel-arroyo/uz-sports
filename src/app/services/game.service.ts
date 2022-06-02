import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as dayjs from 'dayjs';
import { map, Observable } from 'rxjs';
import { Game } from '../core/models/Game';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameCollection: AngularFirestoreCollection<Game>;
  games: Observable<Game[]>;
  db: AngularFirestore;

  constructor(public fb: AngularFirestore, private scoreService: ScoreService) {
    this.db = fb;
    this.gameCollection = fb.collection<Game>('Games');

    this.games = this.gameCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Game;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getGame(id: string) {
    const itemRef = this.db.doc<Game>(`/Games/` + id);
    let game = itemRef.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data() as Game;
        const id = a.payload.id;
        return { ...data, id };
      })
    );
    return game;
  }

  getGameBySchedule(date: string, time: string) {
    let games = this.db.collection<Game>('Games', (ref) =>
      ref.where('date', '==', date).where('time', '==', time).limit(1)
    );
    return games.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Game;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  async createGame(
    idTeam1: string,
    idTeam2: string,
    date = dayjs().format('DD/MM/YYYY'),
    time = dayjs().format('HH:mm')
  ) {
    const id = this.db.createId();
    const idScore1 = await this.scoreService.createScore(idTeam1);
    const idScore2 = await this.scoreService.createScore(idTeam2);
    let newGame: Game = {
      id: id,
      idTeam1: idTeam1,
      idTeam2: idTeam2,
      idScore1: idScore1,
      idScore2: idScore2,
      date: date,
      time: time,
      quarter: 1,
      extraquarter: 0,
    };
    // const res = await this.gameCollection.add(newGame)
    await this.gameCollection.doc(id).set(newGame);
    return newGame;
  }

  setGameTeamsId(idGame: string, idTeam1: string, idTeam2: string) {
    try {
      this.gameCollection
        .doc(idGame)
        .update({ idTeam1: idTeam1, idTeam2: idTeam2 });
    } catch (err) {
      console.log(err);
    }
  }
}
