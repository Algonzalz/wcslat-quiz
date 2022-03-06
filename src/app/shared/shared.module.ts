import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos personales
import { MaterialModule } from '../material.module';

// componentes personales
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [NavbarComponent, TableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
