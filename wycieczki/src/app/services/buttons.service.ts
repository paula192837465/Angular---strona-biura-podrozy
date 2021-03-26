import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  sumOfTrips = 0;
  addButton=false;
  deleteButton=true;

  constructor() { }

  updateMessageFromButtons(add_delete : number)
{
  
   this.sumOfTrips+=add_delete;
   console.log("buttons: " + this.sumOfTrips);
}

getNumOfTrips()
{
  return this.sumOfTrips;
}

activateButton(isEmpty: boolean, isFull : boolean)
{
  this.addButton=isEmpty;
  this.deleteButton=isFull;
}

getInfoAddButton()
{
  return this.addButton;
}

getInfoDelButton()
{
  return this.deleteButton;
}
}

