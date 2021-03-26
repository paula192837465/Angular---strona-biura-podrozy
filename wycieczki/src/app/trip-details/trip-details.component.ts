import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../Trip';
import { TripsService } from '../services/trips.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  id: any;
  journey;
  starsGrade = 0;
  numberOfReviews=0;
  totalRev=0;

  constructor(private route: ActivatedRoute, private tripService : TripsService, private authService: AuthService) { 
    
  }

  ngOnInit(): void {
  
  this.id = this.route.snapshot.paramMap.get('id');
  console.log(this.id);

  // console.log(this.tripService.getOneTrip(this.id).valueChanges());

  this.tripService.getOneTrip(this.id).get().subscribe(trip =>
    this.journey={
      name: trip.data().name,
      country : trip.data().country,
      start: trip.data().start,
      end:trip.data().end,
      price:trip.data().price,
      seats:trip.data().seats,
      description:trip.data().description,
      rating:trip.data().rating,
      urlImage:trip.data().urlImage
    });
    // console.log(this.journey.urlImage);

 
}

setReview(stars:number)
  {
    this.numberOfReviews +=1;
    this.starsGrade+=stars;

    this.totalRev=Math.round(this.starsGrade/this.numberOfReviews*100)/100;
    console.log("total: " + this.totalRev + " " + this.numberOfReviews + " "+ this.starsGrade);

    this.journey.rating=this.totalRev;

    console.log(this.journey.rating);
    this.tripService.updateTrip(this.journey.name , this.journey);
    
  }

  cantEdit()
  {
    return this.authService.cantEdit();
  }
}
