import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentTitle = 'Parent Component';
  handleParent(){
    console.log('Parent Component')

  
  }
}
