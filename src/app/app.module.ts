import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SearchbarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultsComponent } from './components/results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainService } from './services/domain.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchResultsComponent } from './components/search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    HeaderComponent,
    ResultsComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [HttpClientModule, DomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
