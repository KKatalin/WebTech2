import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import { User } from '../../Model/Felhasznalo'
import { Router} from '@angular/router';

@Component({
  selector: 'app-account-info',
  templateUrl: './fiok-info.komponens.html',
  styleUrls: ['./fiok-info.komponens.css']
})
export class FiokInfoKomponens implements OnInit {

 
  user= new User();
  felhnev: string;
  nev: string;
  email: string;

  constructor(
    private router: Router,
    private apiService:ApiService

    ) {
    this.getUser();

    }

  ngOnInit(): void {
  }

  


  getUser(){

    if (this.apiService.getCurrentuser().felhNev== null){
      this.router.navigate(['/Bejelentkezes']);
    }

    this.user=this.apiService.getCurrentuser();
    this.nev= JSON.stringify(this.user.nev)
    this.felhnev= JSON.stringify(this.user.felhNev)
    this.email= JSON.stringify(this.user.email)
  }


  logout(){
    this.user= new User()
    this.apiService.setCurrentuser(this.user);
    this.router.navigate(['/Bejelentkezes']);
  }



}
