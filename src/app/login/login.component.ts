import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private app: AppComponent) { }

  login(form: NgForm){

    let email = form.value.email
    let password = form.value.password

    this.app.login(email, password);

  }

}
