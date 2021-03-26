import { Injectable } from '@angular/core';
import { Trip } from '../Trip';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  tripRef : AngularFirestoreCollection<Trip>;

  trippp;

  constructor(private db: AngularFirestore) {
    this.tripRef = db.collection("trips");
  }


  createTrip(journey: Trip): void {
    console.log("dodano");
    this.tripRef.doc(journey.name).set({ name: journey.name, country : journey.country, start: journey.start, end : journey.end, price: journey.price, seats: journey.seats, description : journey.description, rating : 0, urlImage: journey.urlImage})
  }

  updateTrip(key: string, value: any) {
    return this.tripRef.doc(key).update(value);
  }

  deleteTrip(key: string) {
    return this.tripRef.doc(key).delete();
  }

  getTripsList() {
    return this.tripRef;
  }

  getOneTrip(key : string)
  {
     return this.tripRef.doc(key);
  }

}
