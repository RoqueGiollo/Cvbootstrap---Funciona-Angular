import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl ('',Validators.required),
    password : new FormControl ('',Validators.required),

  })

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form: any){
    console.log(form)

  }
  //login(form:NgForm){

  //  const email=form.value.email
  //  const password=form.value.password

  //}

}
