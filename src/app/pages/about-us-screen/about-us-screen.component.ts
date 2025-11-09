import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us-screen',
  templateUrl: './about-us-screen.component.html',
  styleUrls: ['./about-us-screen.component.css']
})
export class AboutUsScreenComponent implements OnInit {
  /**
   * Link de navegação para a seção de ajuda na página inicial.
   * 
   * @type {Array<{route: string, fragment: string}>}
   */
  aboutLink = [
    { route: "/", fragment: "como-ajudar" }
  ]

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller, private titleService: Title) { }

/**
 * Inicializa o componente e define o título da página.
 * 
 * @returns {void}
 */
  ngOnInit(): void {
    this.titleService.setTitle('Sobre Nós • Projeto Piragui');
  }

  /**
   * Navega para uma rota específica com suporte a fragmentos.
   * 
   * @param {string} route - Rota de destino
   * @param {string} [fragment] - Fragmento opcional para scroll
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
   * Executa navegação para dispositivos móveis com suporte a fragmentos.
   * 
   * Esta função é uma versão específica para mobile que utiliza a mesma lógica de navegação principal, mantendo consistência no comportamento entre diferentes tamanhos de tela.
   * 
   * @param {string} route - Rota de destino para navegação
   * @param {string} [fragment] - Fragmento opcional para scroll até âncora específica
   * @returns {void}
   */
  navigateToMobile(route: string, fragment?: string): void {
    this.navigateTo(route, fragment);
  }
}
