import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
    {path:'',component:ProductsComponent,
    children:[
        {path:'create',component:CreateProductComponent},
        {path:'show/:id',component:ShowProductComponent},
        {path:'edit/:id',component:UpdateProductComponent},
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
