import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const BACKEND_URL = 'http://localhost:3000';
// for angular http methods

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {

  email = '';
  password = '';
  role = '';
  email2 = '';
  password2 = '';
  

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {}
  add(){
    let user = {username:this.email, pwd: this.password, role: this.role};
    this.httpClient.post(BACKEND_URL + '/superadminadd', user, httpOptions)
      .subscribe((data:any)=>{
        alert("posting: " +JSON.stringify(user));

        alert("postRes: " +JSON.stringify(data));


      })
  }
  delete(){
    let user = {username:this.email2, pwd: this.password2};
    this.httpClient.post(BACKEND_URL + '/superadminafter', user, httpOptions)
      .subscribe((data:any)=>{
        alert("posting: " +JSON.stringify(user));

        alert("postRes: " +JSON.stringify(data));

    })
  }
}