import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/Trip';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  trip: Trip = new Trip();
  submitted = false;
  email;
  password;
  success;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.authService.login(this.email, this.password);
    this.email=' ';
    this.password=' ';
  }

}
