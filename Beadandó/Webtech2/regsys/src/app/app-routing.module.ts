import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KertTermLetrehozKomponens } from './components/KertTerm-Letrehoz/KertTerm-Letrehoz.komponens';
import { KertTermListaKomopnens } from './components/KertTerm-Lista/KertTerm-Lista.komponens';
import { KertTermSzerkKomponens } from './components/KertTerm-Szerk/KertTerm-Szerk.komponens';
import { BejelentkezesKomponens } from './components/Bejelentkezes/bejelentkezes.komponens';
import { RegisztracioKomponens } from './components/Regisztracio/Regisztracio.komponens';
import { FiokInfoKomponens } from './components/Fiok-info/fiok-info.komponens';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'Bejelentkezes'},
  {path: 'KertTerm-Letrehoz', component:KertTermLetrehozKomponens},
  {path: 'KertTerm-Szerk/:id', component:KertTermSzerkKomponens},
  {path: 'KertTerm-Lista', component:KertTermListaKomopnens},
  {path: 'Bejelentkezes', component:BejelentkezesKomponens},
  {path: 'Regisztracio', component:RegisztracioKomponens},
  {path: 'Fiok-info', component:FiokInfoKomponens}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
