import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonsService } from '../services/buttons.service';
import { BasketComponent } from '../basket/basket.component';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-add-delete-buttons',
  templateUrl: './add-delete-buttons.component.html',
  styleUrls: ['./add-delete-buttons.component.css']
})
export class AddDeleteButtonsComponent implements OnInit {

  addButInfo=false;
  delButInfo=true;
  constructor(private buttonsService : ButtonsService) { }

  ngOnInit(): void {
  }

  // @Input() receivedMssAdd: boolean;
  // @Input() receivedMssDelete: boolean;

  @Output() messageToEmit = new EventEmitter<number>();
  

  sendMessageToParent(message:number)
  {
    this.messageToEmit.emit(message);
    this.buttonsService.updateMessageFromButtons(-message);
  }

  getAddInfo()
  {
    this.addButInfo=this.buttonsService.getInfoAddButton();
    return this.addButInfo;
    
  }

  getDelInfo()
  {
    this.delButInfo=this.buttonsService.getInfoDelButton();
    return this.delButInfo;
  }
  


}
