import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  navLinks = [
    { label: "SOBRE NÓS", route: "/sobre-nos", fragment: undefined },
    { label: "PROJETOS", route: "/projetos", fragment: undefined },
    { label: "COMO AJUDAR", route: "/", fragment: "como-ajudar" },
  ]

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

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

  navigateToMobile(route: string, fragment?: string): void {
    this.toggleMobileMenu();
    this.navigateTo(route, fragment);
  }
}