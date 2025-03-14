import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit{
    isloading:boolean = true;
    recipeId;
    recipeDetails
    constructor(private apiService:AppService, private activatedRoute:ActivatedRoute) {
        setTimeout(() => {
            this.isloading = false;
          }, 3000);
        }

    ngOnInit(): void {
      this.recipeId = this.activatedRoute.snapshot.paramMap.get('id');
      this.getRecipeDetails(this.recipeId);
    }

    getRecipeDetails(id){
      this.apiService.getRecipeDetails(id).subscribe((res)=>{
        this.recipeDetails = res;
        this.isloading= true;
        console.log('recipeDetails', this.recipeDetails);
      }, (err)=>{
        console.log(err)
      });
    }

  }
