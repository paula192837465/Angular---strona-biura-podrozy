import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListOfTripsComponent } from './list-of-trips/list-of-trips.component';
import { AddDeleteButtonsComponent } from './add-delete-buttons/add-delete-buttons.component';
import { StarsComponent } from './stars/stars.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPrice, SearchCountry, SearchDate, SearchReview } from './filters.pipe';
import { BasketComponent } from './basket/basket.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from './services/auth.service';

import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    ListOfTripsComponent,
    AddDeleteButtonsComponent,
    StarsComponent,
    TripCardComponent,
    DeleteTripComponent,
    FormComponent,
    SearchCountry,
    SearchPrice,
    SearchDate,
    SearchReview,
    BasketComponent,
    MainContainerComponent,
    TripDetailsComponent,
    LoginComponent,
    RegisterComponent,
    UsersListComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule

  ],
  providers: [SearchPrice, SearchCountry, SearchDate, SearchReview, AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
