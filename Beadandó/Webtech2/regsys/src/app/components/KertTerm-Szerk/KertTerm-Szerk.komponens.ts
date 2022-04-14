import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { User } from '../../Model/Felhasznalo'


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-product-edit',
  templateUrl: './KertTerm-Szerk.komponens.html',
  styleUrls: ['./KertTerm-Szerk.komponens.css']
})
export class KertTermSzerkKomponens implements OnInit {

  user= new User();
  felhnev: string;
  nev: string;
  email: string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
    this.getUser();
  }

  get myForm() {
    return this.createForm.controls;
  }

  submitted = false;

  createForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  mainForm() {
    this.createForm = this.formBuilder.group({
      nev: [''],
      ar: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      mennyiseg: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return false;
    } else {
      let id= this.router.url.toString();
      id=id.replace('/KertTerm-Szerk/:','');

      this.apiService.updateProduct(id,this.createForm.value).subscribe(
        (res) => {
          console.log('Product updated successfully!');
          this.ngZone.run(() => this.router.navigateByUrl('/KertTerm-Lista'));
        }, (error) => {
          console.log(error);
        });


    }
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
