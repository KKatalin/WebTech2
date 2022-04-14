import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ApiService} from 'src/app/service/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './bejelentkezes.komponens.html',
  styleUrls: ['./bejelentkezes.komponens.css']
})
export class BejelentkezesKomponens implements OnInit {

  loginForm= new FormGroup({
    felhNev: new FormControl(''),
    jelszo: new FormControl('')

  });

  users: any=[];

  constructor(

    private router: Router,
    private apiService:ApiService

    ) { }

  ngOnInit(): void {

  }

  get f() { return this.loginForm.value; }


  onSubmit(){
    let currentUser=(JSON.stringify(this.loginForm.value.felhNev))
    let currentPassword=(JSON.stringify(this.loginForm.value.jelszo))
    let match= false;
    this.apiService.getUsers().subscribe((data) =>{
      this.users=data;

      for(let user of this.users){
        if(JSON.stringify(user.felhNev) === currentUser && currentPassword === JSON.stringify(user.jelszo) ){
          match=true;
          this.apiService.setCurrentuser(user);
        }
      }


      if(match){
        this.router.navigate(['/KertTerm-Lista']);
      }
      else{
        document.getElementById('hibasAdat').innerHTML="Helytelen felhasználónév vagy jelszó!";
    
      }



    });


  }





}
