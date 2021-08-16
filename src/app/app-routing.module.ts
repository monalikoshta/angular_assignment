import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostTableComponent } from './post-table/post-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/ques1', pathMatch: 'full'},
  {path: 'ques1', component: PostTableComponent},
  {path: 'ques2', component: FormPageComponent},
  {path: '**', component: PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostTableComponent, FormPageComponent, PageNotFoundComponent]
