import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import { User } from '../../Model/Felhasznalo'
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './KertTerm-Lista.komponens.html',
  styleUrls: ['./KertTerm-Lista.komponens.css']
})
export class KertTermListaKomopnens implements OnInit {

  KertTermek: any=[];
  user= new User();
  felhnev: string;
  nev: string;
  email: string;

  constructor(
    private router: Router,
    private apiService:ApiService

    ) {
    this.readProduct();
    this.getUser();

    }

  ngOnInit(): void {
  }

  readProduct() {
    this.apiService.getProducts().subscribe((data) =>{
      this.KertTermek=data;
    });
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


  edit(index){

    let id=this.KertTermek[index]._id;
    this.router.navigate(['/KertTerm-Szerk/:'+ id]);

  }

}
