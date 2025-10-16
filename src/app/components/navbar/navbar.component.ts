import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navLinks = [
    { label: 'SOBRE NÓS', route: '/' },
    { label: 'PROJETOS', route: '/' },
    { label: 'COMO AJUDAR', route: '/' }
  ];

  constructor(private router: Router) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
} 
