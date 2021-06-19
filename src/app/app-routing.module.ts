import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComodenunciarPageComponent } from './components/comodenunciar-page/comodenunciar-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InformacoesPageComponent } from './components/informacoes-page/informacoes-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { RedeapoioPageComponent } from './components/redeapoio-page/redeapoio-page.component';

const routes: Routes = [
{
  path:'',
  component: MenuTemplateComponent,
  children: [
    {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'informacoes',
    component: InformacoesPageComponent
  },
  {
    path: 'rededeapoio',
    component: RedeapoioPageComponent
  },
  {
    path: 'comodenunciar',
    component: ComodenunciarPageComponent
  }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }    