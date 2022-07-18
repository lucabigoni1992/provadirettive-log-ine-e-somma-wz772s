import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `


  <app-somma [ADDENDO1]="3" [ADDENDO2]="5"  ></app-somma>
  <my-login-form [titoloLogIn]="'hp'" (menu)='open($event)'>Your Form</my-login-form>
  
  <my-login-form [titoloLogIn]="" (menu)='open($event)'>Your Form</my-login-form>
  
  <my-login-form [titoloLogIn]="'intel'" [error]="'Username or password invalid'" (menu)='open($event)'>Your Form With Error Message</my-login-form>
  `,
  styles: [],
})
export class AppComponent {
  //
}
