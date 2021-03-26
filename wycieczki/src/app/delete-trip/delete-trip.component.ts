import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  @Output() deleteTrip =new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }



}
