import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainEntranceComponent } from './components/main-entrance/main-entrance.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { BibliographyComponent } from './components/bibliography/bibliography.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MainEntranceComponent,
    TimelineComponent,
    DiagramComponent,
    BibliographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
