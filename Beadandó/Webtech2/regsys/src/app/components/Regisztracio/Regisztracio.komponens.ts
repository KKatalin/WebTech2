import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './Regisztracio.komponens.html',
  styleUrls: ['./Regisztracio.komponens.css']
})
export class RegisztracioKomponens implements OnInit {

  registrationForm= new FormGroup({

    nev: new FormControl(),
    felhNev: new FormControl(),
    jelszo: new FormControl(),
    email: new FormControl(),
    Szulid: new FormControl

  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }


  get myForm() {
    return this.createForm.controls;
  }

  submitted = false;

  createForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }


  mainForm() {
    this.createForm = this.formBuilder.group({
      nev: ['', [Validators.required, Validators.pattern('^[A-Z][a-z].+([a-z])+$')]],
      felhNev: [''],
      jelszo: [''],
      email: ['',[Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      Szulid: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.createForm.valid) {
      return false;
    } else {
      this.apiService.createUser(this.createForm.value).subscribe(
        (res) => {
          console.log('Successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/Bejelentkezes'));
        }, (error) => {
          console.log(error);
        });
    }
  }


}
