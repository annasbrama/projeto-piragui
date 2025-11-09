import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  /**
   * Controla o estado de abertura/fechamento do menu mobile.
   * 
   * @type {boolean}
   */
  isMobileMenuOpen = false;

  /**
   * Array de links de navegação disponíveis na navbar.
   * 
   * @type {Array<{label: string, route: string, fragment: string|undefined}>}
   */
  navLinks = [
    { label: "INÍCIO", route: "/", fragment: undefined },
    { label: "SOBRE NÓS", route: "/sobre-nos", fragment: undefined },
    { label: "PROJETOS", route: "/projetos", fragment: undefined },
    { label: "COMO AJUDAR", route: "/", fragment: "como-ajudar" },
  ]

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller,
  ) { }

  /**
   * Alterna o estado do menu mobile e controla o overflow do body para prevenir scroll quando o menu está aberto.
   * 
   * @return {void}
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Navega para uma rota específica com suporte a fragmentos para scroll.
   * 
   * @param {string} route - Rota do destino
   * @param {string} [fragment] - Fragmento opcional para navegação por âncora
   * @returns {void}
   */
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

  /**
   * Navegação mobile que fecha o menu após a seleção.
   * 
   * @param {string} route - Rota do destino
   * @param {string} [fragment] - Fragmento opcional para navegação por âncora
   * @returns {void}
   */
  navigateToMobile(route: string, fragment?: string): void {
    this.toggleMobileMenu();
    this.navigateTo(route, fragment);
  }
}