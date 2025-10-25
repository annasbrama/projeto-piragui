import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AboutUsScreenComponent } from './pages/about-us-screen/about-us-screen.component';
import { CampaignsScreenComponent } from './pages/campaigns-screen/campaigns-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
  }, 
  {
    path: 'about-us-screen',
    component: AboutUsScreenComponent
  },
    {
    path: 'campaigns-screen',
    component: CampaignsScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
