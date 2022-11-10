import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { League } from '../../core/class/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private firestore: AngularFirestore) { }

  GetAll(): Observable<League[]> {
    /*const LeagueRef = this.firestore.collection('Leagues');
    console.log(LeagueRef.doc())
    console.log(LeagueRef)*/

    return this.firestore.collection<League>('Leagues').valueChanges();
  }

  GetLeague(NameLeague: string) {
    return this.firestore.collection<League>('Leagues', ref => ref.where('NameLeague', '==', NameLeague)).valueChanges();
    //collection('Login', ref => ref.where('username', '==', 'up.ulises.o@gmail.com')).valueChanges();
  }
}
