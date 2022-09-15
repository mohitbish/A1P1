import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router} from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = " ";
  password = " ";
  userList = [
    {"username":"a@g.com","password":"123", "id": 1, "role":"Superadmin" },
    {"username":"b@g.com","password":"123", "id": 3, "role":"Groupadmin"},
    {"username":"c@g.com","password":"123", "id": 3, "role":"Groupassis"}
    ];

  constructor(private router: Router) { 
    

  }
  check(){
    for (let i = 0; i < this.userList.length; i++) { 
      if (this.userList[i].username == this.username){
          sessionStorage.setItem('userid', this.userList[i].id.toString());
          sessionStorage.setItem('username', this.userList[i].username);
          sessionStorage.setItem('role', this.userList[i].role);
          sessionStorage.setItem('loginstatus', "true");
          this.router.navigateByUrl('/account'); 
      }
    }
  }

  ngOnInit(): void {
  }

}


