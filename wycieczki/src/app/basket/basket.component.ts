import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  arrTrips=[]
  arrNums=[]

  mapOfTrips = new Map();
  

  @Input() statistics1: any[];
  @Input() statistics2: any[];
  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
    this.mapOfTrips = this.basketService.getMap();
    this.mapOfTrips.forEach((value, key, theMap) => console.log(`key: ${key}, value: ${value}`));
    this.mapOfTrips.forEach((value, key, theMap) => this.arrTrips.push(key));
    this.mapOfTrips.forEach((value, key, theMap) => this.arrNums.push(value));
  }

  ngOnChanges(): void {

   
  
    // for(let i in this.arrTrips)
    // {
  
    //   if(this.arrTrips[parseInt(i)+1]==this.statistics1)
    //   {
    //     this.arrNums[parseInt(i)+1]=this.statistics2;
    //     return;
    //   }
    // }
    
    // this.arrTrips.push(this.statistics1);
    // this.arrNums.push(this.statistics2);
  }


    
}
