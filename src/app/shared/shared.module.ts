import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modulos personales
import { MaterialModule } from '../material.module';

// componentes personales
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent, 
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    TableComponent
  ]
})
export class SharedModule { }
