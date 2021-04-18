import { BindingParser } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import {Login} from './login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = "Angular";
  applyClass = false;
  applyStyle = false;
  styleObj1 = {
    backgroundColor: 'orange',
    color: 'black'
  }
  styleObj2 = {
    backgroundColor: 'greenyellow',
    color: 'white'
  }
  courseName: string = "Angular";
  updateCourse(course:string) {
    this.courseName = course;
  }
  reset(){
    this.courseName = 'Angular';
  }
login = new Login()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    //validation
  }
  //this is example for ngif directive with login
  //this is example for ngif directive with login
  isAuthenticated!: boolean;
  submitted: boolean = false;
  userName: string | undefined;
  onSubmit1(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === "admin" && password === "admin")
      this.isAuthenticated = true;
    else
      this.isAuthenticated = false;
  }

}

//string interpolation({{data }})
// property BindingParser([propertyname] ="data")
// event BindingParser((event) = "expression")

// two way binding ([(ngModel)] = "data")
//property binding [propertyName] = "value" or [bind-propertyName] ="src"
//[disabled] = "buttonStatus" or [src] = 'imageUrl'
// or bind-src = 'imageUrl'
//interpolation is an alternative to property binding in many cases src="{{imageUrl}}"
//[src] = "imageUrl"
//attribute binding// attributes are definded by HTML where as 
// properties are defined by the DOM
//userName.getAttribute('value')
// userName.value
//attribute binding syntax starts with prefix attr followed by a dot sugn and the naame of the attribute
//[attr.colspan] = "2+3"

//change className with [class.classname] = "isValid" class binding
//[class] ="appluClass ? 'btn btn-success': 'btn btn-primary'" 

// style binding [style.background-color] ="applyStyle ? 'orage:green'"
// apply miltiple css stayle properties using 
//[style="applyStyle? styleObj1;styleObj2"]
//event binding
//inviking functions to perfrom some calculatiions
//changing the values of the class properties;
//making api calls to fetch data, add some new data
// the syntax of angular event binding consists of two parts
//a target event name with parentheses on the left of an equal sign and a quoted template statement on teh right hand side of the qual sign