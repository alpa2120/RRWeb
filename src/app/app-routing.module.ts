import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainEntranceComponent } from './components/main-entrance/main-entrance.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'main-entrance',
    pathMatch: 'full',
    component: MainEntranceComponent
  },
  {
    path: 'timeline',
    pathMatch: 'full',
    component: TimelineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }