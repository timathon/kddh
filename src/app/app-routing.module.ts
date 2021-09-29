import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/math', pathMatch: 'full' },
  { path: 'math', loadChildren: () => import('./math/math.module').then(m => m.MathModule) },
  { path: 'english', loadChildren: () => import('./english/english.module').then(m => m.EnglishModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
