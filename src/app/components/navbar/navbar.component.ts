import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILogo } from 'src/app/interface/ILogoNavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logoNavbar: ILogo[] = [{
    name: "Logo Projeto Piragui", image: "assets/logo/piragui-logo.png"
  }]

  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
} 
