import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { maxHeaderSize } from 'http';
import { HeaderComponent } from '../header/header.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ResultsComponent } from '../results/results.component';



@NgModule({
  declarations: [HeaderComponent, SearchbarComponent, ResultsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
