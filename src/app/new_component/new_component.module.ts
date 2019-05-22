import { NgModule } from "@angular/core";
import { NewComponentRoutingModule } from './new_component.routing';
import { NewComponent } from './show/show';
import { EditComponent } from './edit/edit';
import { CommonModule } from '@angular/common';  
// import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NewComponent,
        EditComponent,
        // BrowserModule
    ],
    imports: [
        CommonModule,
        NewComponentRoutingModule,
        MatInputModule,
        FormsModule,
    ],
    exports: [

    ],
    providers: [
      
    ],
    entryComponents: [
    
    ]
}) export class NewComponenttModule { }


