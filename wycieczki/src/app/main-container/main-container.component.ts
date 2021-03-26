import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ButtonsService } from '../services/buttons.service';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../services/User';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  title = 'wycieczki';
  sum=0;
  b1: string;
  b2: number;
  loggedPerson;
  hide;
  currentUser:UserRole;

  constructor(private buttonsService : ButtonsService, private authService :AuthService) { }

  
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

    this.getMessage();
  }

  getMessage()
  {
    this.sum=this.buttonsService.getNumOfTrips();
    return this.sum;
  }
  
  getM(m: any)
  {
    this.b1=m;
  }

  getM2(m: any)
  {
  this.b2=m;
  }

  signOut()
  {
   this.authService.logout();
  }

  getInfo()
  {
    return this.authService.isLoggedIn();
  }

  ShowUser()
  {
    if(this.authService.isLoggedIn())
      return this.authService.userEmail;
  }

  canEdit()
  {
    if(this.authService.canEdit())
    return true;

    return false;
  }

  isAdmin()
  {
    return this.authService.isUserAdmin();
  }

  cantEdit()
  {
    return this.authService.cantEdit();
  }
}
