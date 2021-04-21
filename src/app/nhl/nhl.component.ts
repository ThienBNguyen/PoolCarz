import { Component, OnInit } from '@angular/core';
import { NhlService } from '../nhl.service';

@Component({
  selector: 'app-nhl',
  templateUrl: './nhl.component.html',
  styleUrls: ['./nhl.component.css']
})
export class NhlComponent implements OnInit {

  constructor(private NhlService:NhlService) { }//dependency inject the service
  roster:any;
  errorMessage=""
  ngOnInit(): void {
    this.NhlService.getRoster().subscribe(
      nextData =>{
        this.errorMessage = "";
        this.roster = nextData.roster;
      },
      err =>{
        console.log(err);
        this.errorMessage = err.statusText;
        this.errorMessage = "the roster could not be fetched. please try again";

      }
    )
  }

}
