import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { TripsService } from '../services/trips.service';
import { Trip } from '../Trip';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  trip: Trip = new Trip();
  submitted = false;

  constructor(private tripService: TripsService) { }

  ngOnInit() {
  }

  newTrip(): void {
    this.submitted = false;
    this.trip = new Trip();
  }

  save() {
    this.tripService.createTrip(this.trip);
    this.trip = new Trip();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
