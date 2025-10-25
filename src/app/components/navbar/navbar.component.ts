import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navLinks = [
    { label: "SOBRE NÓS", route: "/about-us-screen", fragment: undefined },
    { label: "PROJETOS", route: "/campaigns-screen", fragment: undefined },
    { label: "COMO AJUDAR", route: "/home-screen", fragment: "como-ajudar" },
  ]

    constructor(
    public router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  navigateTo(route: string, fragment?: string): void {
    if (fragment) {
      this.router.navigate([route], { fragment }).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment)
        }, 100)
      })
    } else {
      this.router.navigate([route])
    }
  }
} 
