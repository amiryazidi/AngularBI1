import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'product', component:ProductComponent},
  {path:'form', component:ReactiveFormComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'product/:id', component:DetailProductComponent},
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
