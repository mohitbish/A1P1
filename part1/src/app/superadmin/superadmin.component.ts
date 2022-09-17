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

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {}
  submit(){
    let user = {username:this.email, pwd: this.password, role: this.role};
    this.httpClient.post(BACKEND_URL + '/superadmin', user, httpOptions)
      .subscribe((data:any)=>{
        alert("posting: " +JSON.stringify(user));

        alert("postRes: " +JSON.stringify(data));

        if (data.ok){
          alert("correct");
          console.log(data.extendeduser);
          sessionStorage.setItem('userid', data.extendeduser.userid.toString());
          sessionStorage.setItem('userlogin', data.ok);
          sessionStorage.setItem('username', data.extendeduser.username);
          sessionStorage.setItem('role', data.extendeduser.role);
          
          this.router.navigateByUrl("/profile");
        }
        else { alert("email or password incorrect");}


      })
  }
  

}
