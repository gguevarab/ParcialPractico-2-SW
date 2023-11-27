import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConferenciaComponent } from './conferencia.component';
import { ConferenciaListComponent } from './conferencia-list/conferencia-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ConferenciaListComponent],
  exports: [ConferenciaListComponent]
})
export class ConferenciaModule { }
