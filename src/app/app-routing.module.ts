import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { AboutUsScreenComponent } from './pages/about-us-screen/about-us-screen.component';
import { CampaignsScreenComponent } from './pages/campaigns-screen/campaigns-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    pathMatch: "full"
  },
  {
    path: 'sobre-nos',
    component: AboutUsScreenComponent
  },
  {
    path: 'projetos',
    component: CampaignsScreenComponent
  }, {
    path: "**",
    redirectTo: "/home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
