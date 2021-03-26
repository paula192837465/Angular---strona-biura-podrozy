import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import listOfTrips from '../../assets/wycieczki.json';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-list-of-trips',
  templateUrl: './list-of-trips.component.html',
  styleUrls: ['./list-of-trips.component.css']
})
export class ListOfTripsComponent implements OnInit {


  arrSeats=[];
  arrPrice=[];
  sum=0;
  maxPrice :number;
  minPrice : number;
  deleteTrip;

  @Output() SumOfRese = new EventEmitter<number>();
  @Output() basket1 = new EventEmitter<string>();
  @Output() basket2 = new EventEmitter<number>();

  //journeys=listOfTrips.trips;

  journeys :any;

  constructor(private tripsService : TripsService) { 
  }



  ngOnInit(): void {

    this.getTripsList();

    for(let i in this.journeys)
    {
      this.arrSeats.push(this.journeys[i].seats);
      this.arrPrice.push(this.journeys[i].price)
    }

    this.maxPrice=Math.max.apply(null,this.arrPrice);
    this.minPrice=Math.min.apply(null,this.arrPrice);
    
  }

  getTripsList()
  {
    this.tripsService.getTripsList().valueChanges().subscribe((jouneys) => this.journeys = jouneys);
  }


  Update() {
    this.arrPrice=[]
    this.arrSeats=[]

    for(let i in this.journeys)
    {
      this.arrSeats.push(this.journeys[i].seats);
      this.arrPrice.push(this.journeys[i].price)
    }

    this.maxPrice=Math.max.apply(null,this.arrPrice);
    this.minPrice=Math.min.apply(null,this.arrPrice);

    console.log(this.maxPrice);
    console.log(this.minPrice);
  }

  GetMessage(message: number)
  {
    
    this.SumOfRese.emit(message);
  }

  DeleteTrip(message: any)
  {
    this.journeys=this.journeys.filter(obj => obj !== message);
    this.Update();
    
  }

  addNewTrip(newTrip: any)
  {
    this.journeys.push(newTrip);
    this.Update();
  }

}
