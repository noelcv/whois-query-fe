import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SearchbarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainService } from './services/domain.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './store/reducers/app.reducer';
import { DomainEffects } from './store/effects/domain.effects';
import { QueryEffects } from './store/effects/query.effects';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([QueryEffects, DomainEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SearchResultsComponent,
    WatchListComponent
  ],
  providers: [HttpClientModule, DomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
