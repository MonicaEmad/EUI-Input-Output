import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges,OnDestroy{
  constructor(){
    console.log(' constructor');
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change');
  }
  ngOnInit(): void {
    console.log('Init');
  }

 @Input () title;
 @Output() dataFromChild = new EventEmitter();
 handleChild(){
  this.dataFromChild.emit(this.title);
 }

}
