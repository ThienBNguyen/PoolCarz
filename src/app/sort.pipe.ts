import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from './book-ride-component/ride';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(inputRides: Ride[], filterBy:string='string'): Ride[] {
    let rides = [...inputRides]
  
    return rides.filter(ride=>{
      if(filterBy=="from") return ride.pickup.toLowerCase()=="gotham";
      if(filterBy=="to") return ride.destination.toLowerCase()=="gotham";
      if(filterBy == "others") return (ride.pickup.toLowerCase()!="gotham" && ride.destination.toLowerCase()! =="gotham");
      return true;
    })
  }

}
