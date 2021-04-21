import { Component, OnInit } from '@angular/core';
import { Ride } from '../book-ride-component/ride';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  valueToSendToInner:any;
  valueReceivedFromInner:any;
  rides:Ride[]=[];


  constructor(private rideService:RideService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // this.rides = this.rideService.getRides();

}
}
