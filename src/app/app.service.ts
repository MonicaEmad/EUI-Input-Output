
import { HttpClient } from '@angular/common/http';
// import { User } from './models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {

//     users: User[] = [
//         {name: 'monica', age: 20, salary: 1000},
//         {name: 'sara', age: 22, salary: 2000},
//         {name: 'ali', age: 25, salary: 3000},
//         {name: 'mai', age: 27, salary: 4000},
//     ];

//     constructor(private http: HttpClient) {}

//     url = 'https://forkify-api.herokuapp.com/api/search?q=pizza';

//     getRecipes() {
//         return this.http.get(this.url);
//     }


//     getRecipeDetails(id: string) {
//         const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
//         return this.http.get(url);
//     }
//     isLogged:boolean =false;
// }


@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) {}

    getRecipes() {
        return this.http.get(environment.apiBaseUrl);
    }

    getRecipeDetails(id: string) {
        return this.http.get(`${environment.apiRecipeDetailsUrl}${id}`);
    }

    isLogged: boolean = false;
}
