import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
// const BACKEND_URL = 'http://localhost:3000';
const BACKEND_URL = 'https://localhost:3000';

// for angular http methods
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import { Userobj } from '../userobj';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid = 0;
  username = "";
  role = "";
  constructor(private router: Router, private httpClient: HttpClient) { 
    if (!(sessionStorage.getItem('userlogin')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
    this.username = sessionStorage.getItem('username')!;
    this.role = sessionStorage.getItem('role')!;
    this.userid = Number(sessionStorage.getItem('userid'));
  }

  ngOnInit(): void {
  }

  editFunc(){
    let userobj = {
      'userid': this.userid,
      'username': this.username, 
      'role': this.role
    }

    
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('role', this.role);
    sessionStorage.setItem('userid', this.userid.toString());

    this.httpClient.post<Userobj[]>(BACKEND_URL + '/loginafter', userobj,  httpOptions)
      .subscribe((m: any) => {alert(JSON.stringify(m));});



  }

}
