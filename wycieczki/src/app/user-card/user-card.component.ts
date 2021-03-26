import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { element } from 'protractor';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() systemUser;
  roles=['admin', 'editor', 'VIP', 'reader'];
  selectedRole;
 
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   
  }

  updateUser()
  {
    console.log(this.selectedRole);
    if(this.selectedRole!=null)
    {
      this.systemUser.roles.push(this.selectedRole);
    console.log(this.systemUser.roles);
    this.authService.updateUser(this.systemUser.email, this.systemUser);
    }
    
  }


  
}
