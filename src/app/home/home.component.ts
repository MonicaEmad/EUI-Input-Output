import { User } from '../models/user';
import { AppService } from './../app.service';
import { Component, Input, OnInit} from '@angular/core';
import { Recipes } from '../models/recipes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  implements OnInit {

    // users:User[]=[
    //     {name:'monica',age:20,salary:1000},
    //     {name:'sara',age:22,salary:2000},
    //      {name:'ali',age:25,salary:3000},
    //     {name:'mai',age:27,salary:4000},
    //     ]
    // }

users
recipes
    router: any;
       constructor(private appService:AppService){

}
    ngOnInit(): void {
      this.getRecipes()
      console.log();
    //   this.users=this.appService.users
    }

getRecipes(){
    this.appService.getRecipes().subscribe((res:Recipes)=>{
    this.recipes=res.recipes
    console.log(res.recipes)
  },  (err)=>{
    console.log(err)
})
    }
    navigateToDetails() {
       
    }
}
