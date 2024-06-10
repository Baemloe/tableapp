import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
})
export class AppModule { }
