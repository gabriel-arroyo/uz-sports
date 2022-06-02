import { Inject, Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Foul, Point, Score } from '../core/models/Score';
import * as dayjs from 'dayjs';
import { Game } from '../core/models/Game';
import { Player } from '../core/models/Player';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  scoreCollection: AngularFirestoreCollection<Score>;
  db: AngularFirestore;
  game: Game = {
    id: '',
    idScore1: '',
    idScore2: '',
    idTeam1: '',
    idTeam2: '',
    date: dayjs().format('YYYY/MM/DD'),
    time: dayjs().format('HH:mm'),
  };

  constructor(public fb: AngularFirestore) {
    this.db = fb;
    this.scoreCollection = fb.collection<Score>('Scores');
  }

  setGame(game: Game) {
    this.game = game;
  }

  getScore(idScore: string) {
    let games = this.db.collection<Score>(`Scores/${idScore}`);
    return games.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Score;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getTotalScore(idScore: string) {
    let games = this.db.collection<Point>(`Scores/${idScore}/points`);
    let total = 0;
    games
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Point;
            return { ...data };
          })
        )
      )
      .subscribe((score) => {
        total = score.reduce((a, b) => a + (b['points'] || 0), 0);
      });
    return total;
  }

  getPoints(idScore: string) {
    let games = this.db.collection<Point>(`Scores/${idScore}/points`);
    return games.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Point;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getScoreBySchedule(date: string, time: string) {
    let games = this.db.collection<Score>('Scores', (ref) =>
      ref.where('date', '==', date).where('time', '==', time).limit(1)
    );
    return games.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Score;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  getScoreByIdGameAndTeam(idGame: string, idTeam: string) {
    let scores = this.db.collection<Score>('Scores', (ref) =>
      ref.where('idGame', '==', idGame).where('idTeam', '==', idTeam).limit(1)
    );
    return scores.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Score;
          const id = a.payload.doc.id;
          return { ...data, id };
        })
      )
    );
  }

  async createScore(team: string) {
    const id = this.db.createId();
    const score: Score = {
      id: id,
      idTeam: team,
    };
    await this.scoreCollection.doc(id).set(score);
    return id;
  }

  addPoints(
    idScore: string,
    idPlayer: string,
    points: number,
    quarter: number,
    time: string
  ) {
    const itemRef = this.db.doc<Score>(`/Scores/${idScore}/`);
    const id = this.db.createId();
    const point: Point = {
      idPlayer: idPlayer,
      quarter: quarter,
      time: time,
      points: points,
    };
    itemRef.collection<Point>('points').doc(id).set(point);
  }

  getAllPoints(idScore: string) {
    return this.db
      .collection<Point>(`/Score/${idScore}/points`)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Point;
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }
}
