import { Routes } from '@angular/router';
import {MeusTreinosComponent} from './meus-treinos-component/meus-treinos-component';

export const routes: Routes = [
  {path: '', component:MeusTreinosComponent},
  {path: 'meus-treinos', component:MeusTreinosComponent},
];
