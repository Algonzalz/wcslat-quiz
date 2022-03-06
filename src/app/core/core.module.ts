import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// componentes personales
import { CharacterComponent } from './character/character.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentsComponent } from './students/students.component';
import { CoreRoutingModule } from './core.routes';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CharacterComponent,
    ProfessorComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    HttpClientModule  
  ]
})
export class CoreModule { }
