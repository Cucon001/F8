import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log_email:string | undefined;
  log_pw:string | undefined;
 
  constructor(private auth_service: AuthService) {}

  login(){
    // Let AuthService process login authentication
    
    this.auth_service.login(this.log_email,this.log_pw); 

  }

  ngOnInit(): void {
    this.log_email="";
  }
}