import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Item } from '../models/Item';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection<Item>('Items').valueChanges();
    this.itemsCollection = afs.collection<Item>('Items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }
      ))
    );

  }

  documentToDomainObject = (_: any) => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }


  getItems() {
    return this.items;
  }
  setItem() {
    this.afs.collection<Item>('Items')
      .add({ title: 'item3', description: 'added from ng' })
      .then(res => {
        console.log('item agregado', res);
      })
      .catch(e => {
        console.log(e);
      })
  }
  deleteItem(id: string) {
    this.itemsCollection.doc(id).delete();
  }
}
