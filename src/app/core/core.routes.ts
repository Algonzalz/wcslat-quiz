import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [

    { path: '', component: CharacterComponent },
    { path: 'student', component: StudentsComponent },
    { path: 'professor', component: ProfessorComponent },
    { path: '**', component: CharacterComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {}
