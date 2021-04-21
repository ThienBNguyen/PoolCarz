import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';
import { SortPipe } from '../sort.pipe';
import { Ride } from './ride';
import { RIDES } from './rides';
//import ride and rides
@Component({
  selector: 'app-book-ride-component',
  templateUrl: './book-ride-component.component.html',
  styleUrls: ['./book-ride-component.component.css']
})
export class BookRideComponentComponent implements OnInit {
  
  submitted: boolean = false;
filterByVar:any=FilterPipe
rides=RIDES
  destinations: any[] = [
    { start: "vanrose Junction", end: "Gotham", available: 3 },
    { start: "PTP", end: "Gotham", available: 2 },
    { start: "Gotham", end: " East-Fort", available: 7 },
    { start: "Gotham", end: "Central Mall", available: 5 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
