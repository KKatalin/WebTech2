import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KertTermLetrehozKomponens } from './components/KertTerm-Letrehoz/KertTerm-Letrehoz.komponens';
import { KertTermListaKomopnens } from './components/KertTerm-Lista/KertTerm-Lista.komponens';
import { KertTermSzerkKomponens } from './components/KertTerm-Szerk/KertTerm-Szerk.komponens';
import { BejelentkezesKomponens } from './components/Bejelentkezes/bejelentkezes.komponens';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RegisztracioKomponens } from './components/Regisztracio/Regisztracio.komponens'
import { FiokInfoKomponens } from './components/Fiok-info/fiok-info.komponens'
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KertTermLetrehozKomponens,
    KertTermListaKomopnens,
    KertTermSzerkKomponens,
    BejelentkezesKomponens,
    RegisztracioKomponens,
    FiokInfoKomponens
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule
  ],

  providers: [ApiService],
  bootstrap: [AppComponent]

})


export class AppModule { }
