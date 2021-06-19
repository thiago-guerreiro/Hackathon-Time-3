import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services/services.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InformacoesPageComponent } from './components/informacoes-page/informacoes-page.component';
import { RedeapoioPageComponent } from './components/redeapoio-page/redeapoio-page.component';
import { ComodenunciarPageComponent } from './components/comodenunciar-page/comodenunciar-page.component';
import { MatCardModule } from '@angular/material/card';
import { RedeapoioCardComponent } from './components/redeapoio-card/redeapoio-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    MenuTemplateComponent,
    HomePageComponent,
    InformacoesPageComponent,
    RedeapoioPageComponent,
    ComodenunciarPageComponent,
    RedeapoioCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
