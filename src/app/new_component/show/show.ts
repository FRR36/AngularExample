import { Component, OnInit } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-component-show',
  templateUrl: 'show.html',
  styleUrls: ['show.scss']
})

export class NewComponent /*implements OnInit*/ {
    num:number=0;
    view:boolean=true;
    click(){
        console.log("Estamos en click");
        this.num+=1;
    }
    change_view(){
        this.view=!this.view;
    }
}
