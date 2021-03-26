import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { UserRole } from 'src/app/services/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email;
  password;
  submitted = false;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.authService.register(this.email,this.password);

    this.password=" ";
  }
}
