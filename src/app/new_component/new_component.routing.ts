import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NewComponent } from './show/show';
import { EditComponent } from './edit/edit';

// import { StudentComponent } from './welcome/studentComponent';

const routes: Routes = [
    {
        path:'', component: NewComponent

    },
    {
        path: 'edit', component: EditComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
      ],
    exports:[ RouterModule ]
})
export class NewComponentRoutingModule { }