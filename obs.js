const rxjs = require('rxjs');
const Observable = rxjs.Observable;


let myObs = new Observable(subcriber=>{
    let myInterval = setInterval(()=>{
        subcriber.next("hello");
    }, 1000)
    setTimeout(() =>{
        clearInterval(myInterval);
        subcriber.complete();
    }, 7000);
    setTimeout(() => {
        subcriber.error("Error Happened.")  
    }, 8000)
})
myObs.subscribe(
    nextData => {console.log(nextData)},
    err => {console.log(err)},
    ()=>{console.log("Observable completed");}
);