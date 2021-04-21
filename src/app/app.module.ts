import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookRideComponentComponent } from './book-ride-component/book-ride-component.component';
import { LoginComponent } from './login/login.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import {HttpClientModule} from "@angular/common/http";
import { NhlComponent } from './nhl/nhl.component';
import { NovelsComponent } from './novels/novels.component';
import { AuthorComponent } from './author/author.component'
@NgModule({
  declarations: [
    AppComponent,
    BookRideComponentComponent,
    LoginComponent,
    SortPipe,
    FilterPipe,
    OuterComponent,
    InnerComponent,
    NhlComponent,
    NovelsComponent,
    AuthorComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
