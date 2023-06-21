import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'sobre', component: SobreComponent
  },
  {
    path: 'cursos', component: CursosComponent
  },
  {
    path: 'contato', component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
