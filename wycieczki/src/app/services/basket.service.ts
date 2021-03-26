import { Injectable } from '@angular/core';
import { Trip } from '../Trip';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  map = new Map();
  dbPath;

  constructor(private authService : AuthService, angularFire : AngularFirestore) {
    this.dbPath=angularFire.collection("users").doc(authService.currentUser.email);
   }

  addTolist(journey : Trip)
  {
    
    // if(this.map.get(journey)==null)
    //   this.map.set(journey, 1)
    // else
    // this.map.set(journey, this.map.get(journey)+1);
  }

  deleteFromList(journey : Trip)
  {
    this.map.set(journey, this.map.get(journey)-1);
    if(this.map.get(journey)==0)
      this.map.delete(journey);
  }

  getMap()
  {
    console.log(this.map);
    return this.map;
  }


}
