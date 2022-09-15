import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = 0;
  username = "";
  role = "";
  

  constructor(private router: Router) {
    if (!(sessionStorage.getItem('loginstatus')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
    this.username = sessionStorage.getItem('username')!;
    this.role = sessionStorage.getItem('role')!;
    this.id = Number(sessionStorage.getItem('id'));

   }

  ngOnInit(): void {
  }

}
