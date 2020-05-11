import { TercoHomeComponent } from './terco-home/terco-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TercoRezarComponent } from './terco-rezar/terco-rezar.component';
import { TercoSobreComponent } from './terco-sobre/terco-sobre.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TercoHomeComponent,
  },
  {
    path: 'rezar',
    component: TercoRezarComponent
  },
  {
    path: 'sobre',
    component: TercoSobreComponent
  },
  { path: '**', redirectTo: '/home', } //Colocar por ultimo!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
