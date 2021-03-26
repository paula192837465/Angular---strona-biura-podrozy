import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TripsService } from '../services/trips.service';
import { ButtonsService } from '../services/buttons.service';
import { BasketService } from '../services/basket.service';
import { SearchCountry } from '../filters.pipe';
import { AuthService } from '../services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input() journey;

  isEmpty=false;
  isFull=true;
  MaxSeats;
  arrPrice=[];
  sum=0;
  maxPrice :number;
  minPrice : number;
  // starsGrade = 0;
  // numberOfReviews;
  // totalRev=0;
  myDate = new Date();

  @Input() MaxPrice :number;
  @Input() MinPrice :number;
  @Output() sumOfRes = new EventEmitter<number>();
  @Output() del = new EventEmitter<any>();
  @Output() updateSignal = new EventEmitter<any>();
  @Output() basketSignal1 = new EventEmitter<string>();
  @Output() basketSignal2 = new EventEmitter<number>();
  
  constructor(private tripsService : TripsService, private buttonsService : ButtonsService,
     private basketService : BasketService, private authService : AuthService, public datePipe: DatePipe) { 
  }

  ngOnInit(): void {
    //tutaj jest problem z określeniem największej wartości i numberOfRevievs
    this.MaxSeats=this.journey.seats;
    //console.log(this.MaxSeats);
    // this.numberOfReviews=0;
  }
  
deleteTrip(mss : boolean)
{
  console.log(mss);
  if(mss)
    this.tripsService.deleteTrip(this.journey.name);
}

ifReader()
{
  if(this.authService.isUserReader())
  {
     let latest_date =this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    if(this.journey.seats<=0 || this.journey.start<latest_date || this.journey.end<latest_date)
      return true; 
  }
 return false;
}

getMessageFromButtons(message: number)
  {
    this.journey.seats +=message;
    if(this.journey.seats <=0)
      this.journey.seats=0;
    this.tripsService.updateTrip(this.journey.name, this.journey);

    if (message==1)
    {
      this.sum--;
      this.basketService.deleteFromList(this.journey.name);
    }
      
    else
    {
      this.sum++;
      this.basketService.addTolist(this.journey.name);
    }
      

    if(this.journey.seats>= this.MaxSeats)
    {
      this.isFull=true;
      this.isEmpty=false;
      this.buttonsService.activateButton(this.isEmpty, this.isFull);
    }
    else if(this.journey.seats <= 0)
    {
      this.isEmpty=true;
      this.isFull=false;
      this.buttonsService.activateButton(this.isEmpty, this.isFull);
    }
    else
    {
      this.isEmpty=false;
      this.isFull=false;
      this.buttonsService.activateButton(this.isEmpty, this.isFull);
    }
 
    //koszyk
    if(this.sum>0)
    {
      this.basketSignal1.emit(this.journey.name);
      this.basketSignal2.emit(this.sum);
    }
      
  }

  getColor()
  {
      if(this.journey.price==this.MaxPrice)
      return '2px 2px 4px green';
      else if(this.journey.price==this.MinPrice)
      return '2px 2px 4px red';
      else
      return '2px 2px 4px gray';
  }

  // setReview(stars:number)
  // {
  //   this.numberOfReviews +=1;
  //   this.starsGrade+=stars;

  //   this.totalRev=Math.round(this.starsGrade/this.numberOfReviews*100)/100;
  //   console.log("total: " + this.totalRev);

  //   this.journey.rating=this.totalRev;

  //   console.log(this.journey.rating);
  //   this.tripsService.updateTrip(this.journey.name , this.journey);
    

  //   this.updateSignal.emit(true);
  // }

  isAdmin()
  {
    if(this.authService.isUserAdmin())
    return true;

    return false;
  }

}
