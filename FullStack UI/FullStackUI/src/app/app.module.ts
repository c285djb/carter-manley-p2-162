import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
//import { HomeComponent } from './home/home.component';

import { ViewMembersComponent } from './components/members/view-members/view-members.component';
import { CreateMemberComponent } from './components/members/create-member/create-member.component';
import { RouterOutlet, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ViewMembersComponent,
    CreateMemberComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }