import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { HomeComponent } from './home/home.component';
import { PaperComponent } from './paper/paper.component';

const routes: Routes = [
  { path: 'paper/:title', component: PaperComponent},
  { path: 'blog-index', component: BlogIndexComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
