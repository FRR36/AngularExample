import { NgModule } from "@angular/core";
import { NewComponentRoutingModule } from './new_component.routing';
import { NewComponent } from './show/show';
import { EditComponent } from './edit/edit';
import { CommonModule } from '@angular/common';  
// import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [
        NewComponent,
        EditComponent,
        // BrowserModule
    ],
    imports: [
        CommonModule,
        NewComponentRoutingModule,
        
    ],
    exports: [

    ],
    providers: [
      
    ],
    entryComponents: [
    
    ]
}) export class NewComponenttModule { }


