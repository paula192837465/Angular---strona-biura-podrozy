import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import firebase from 'firebase/app';
import { UsersService } from '../services/users.service';

import { map } from 'rxjs/operators';
import { UserRole } from '../services/User';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usersRoles = new Map<string, string[]>();
  currentUser: firebase.User = null;

  constructor(private afAuth: AngularFireAuth, private usersService: UsersService, private angularFire: AngularFirestore) {
    this.usersService.getUserRoles().subscribe(roles => {​​​​

      roles.forEach(userRole => {​​​​
      
      this.usersRoles.set(userRole.email, userRole.roles)
      
      }​​​​);
      
      }​​​​);

      this.afAuth.currentUser.then(user => this.currentUser = user)
  }

  // get user(): User | null {
  //   return this.afAuth.auth.currentUser;
  // }

  private checkAuthorization(user: firebase.User, allowedRoles: string[]): boolean {​​​​

     if (!user) return false;
    
    let roles = this.usersRoles.get(user.email);
    
    if (roles == null) return false;
    
    
    for (const role of allowedRoles) {​​​​
    
    if (roles.includes(role))
    {
      return true;
    }
    }​​​​
   
    return false;
    
    }​​​​

  isUserAdmin(): boolean {​​​​

    return this.checkAuthorization(this.currentUser, ["admin"]);
    
    }​​​​

  isUserReader(): boolean {​​​​

    return this.checkAuthorization(this.currentUser, ["reader"]);
    }​​​​

  cantEdit()
  {
    return this.checkAuthorization(this.currentUser, ["reader","VIP"]);
  }

  canEdit(): boolean {​​

    return this.checkAuthorization(this.currentUser, ["admin", "editor"]);
    
  }​​

  isLoggedIn() {
    return this.currentUser != null; 
  }
 
  login( email :string, password :string) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
          this.afAuth.signInWithEmailAndPassword(email, password).then ( ()=> this.afAuth.currentUser.then(user => this.currentUser = user));
      })
  }

  register( email :string, password :string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then ( ()=> this.afAuth.currentUser.then(user => this.currentUser = user));
    this.addUserToDatabase(email);
  }

  logout() {
    return this.afAuth.signOut().then ( ()=> this.afAuth.currentUser.then(user => this.currentUser = user));;
  }
  

  addUserToDatabase(key :string)
    {
      // console.log("jestem w bazie")
        this.angularFire.collection("users").doc(key).set({email : key, roles: ['reader']})
    }

  getOneUser(key :string)
  {
  return this.angularFire.collection("users").doc(key);
  }

  updateUsersBasket(value: any)
  {
    return this.angularFire.collection("users").doc(this.userEmail).update(value)
  }

  getUsersList()
  {
    return this.angularFire.collection("users");
  }

  updateUser(key :string, val :UserRole)
  {
    return this.angularFire.collection("users").doc(key).update(val);
  }

  get userEmail()
  {
    return this.currentUser.email;
  }

    
}
