import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //declaring a var
  title = 'This is Rafsan Jany';
  name = 'rafsan jany'
  
  //declaring a function
  getHim(){
    return this.name
  }
  
  //declaring  obj
  dcit=
  {
    name : 'Hello this name',
    role_code:'Owner'

  }

  // array orparation
  arr
}
