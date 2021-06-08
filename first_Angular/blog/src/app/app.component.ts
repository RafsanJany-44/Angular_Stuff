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
  arr=[1,2,3,4,5,6,7,8]

  //parameter function from a unction and button

  getName(janme: any){

    alert(janme);
  }
}
