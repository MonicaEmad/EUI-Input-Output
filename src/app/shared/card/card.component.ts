import { Component, EventEmitter, Input, Output } from '@angular/core';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() imgSrc
    @Input() title
    @Input() desc
    @Input() btnText
    @Input() id
    @Output() handleEvent = new EventEmitter();
isloading: any;
    constructor(private router:Router){

    }
    fireEvent(){

        // this.handleEvent.emit(this.id)
        this.router.navigate(['recipe',this.id])
    }

}
