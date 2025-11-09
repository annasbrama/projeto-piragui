import { Component } from "@angular/core"
import type { ICarouselSlides } from "src/app/interface/ICarouselSlides"

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent {
  /**
   * Índice do slide atualmente visível no carrossel.
   * 
   * @type {number}
   */
  currentSlide = 0

  /**
   * Referência do intervalo de autoplay para controle de ciclo de vida.
   * 
   * @type {any}
   */
  autoPlayInterval: any


  /**
   * Array de slides configurados para exibição no carrossel.
   * 
   * @type {ICarouselSlides[]}
   */
  slides: ICarouselSlides[] = [
    {
      image: "assets/carousel/header-1.jpeg",
      alt: "Paisagem do caminho até uma das aldeias.",
      borderColor: "#987F25",
    },
    {
      image: "assets/carousel/header-3.jpeg",
      alt: "Artesanato de corujas e onça feito pela aldeia.",
      borderColor: "#04502A",
    },
    {
      image: "assets/carousel/header-2.jpeg",
      alt: "Visão do lado de fora de uma das aldeias.",
      borderColor: "#B60B0B",
    },
  ]

  /** 
   * Inicia o carrossel com navegação automática ao inicializar o componente.
   * 
   * @returns {void}
  */
  ngOnInit(): void {
    this.startAutoPlay()
  }

  /**
   * Limpa o intervalo de autoplay ao destruir o componente para evitar memory leaks.
   * 
   * @returns {void}
   */
  ngOnDestroy(): void {
    this.stopAutoPlay()
  }

  /**
   * Inicia a reprodução automática do carrossel com transições a cada 5 segundos.
   * 
   * @returns {void}
   */
  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  /**
   * Para a reprodução automática do carrossel.
   * 
   * @returns {void}
   */
  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval)
    }
  }

  /**
   * Avança para o próximo slide do carrossel de forma cíclica.
   * 
   * @returns {void}
   */
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
  }

/**
 * Retorna ao slide anterior do carrossel de forma cíclica.
 * 
 * @returns {void}
 */
  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    this.resetAutoPlay()
  }

  /**
   * Navega diretamente para um slide específico pelo índice.
   * 
   * @param {number} index - Índice do slide desejado.
   * @returns {void}
   */
  goToSlide(index: number): void {
    this.currentSlide = index
    this.resetAutoPlay()
  }

  /**
   * Reinicia o ciclo de autoplay após interação manual do usuário.
   * 
   * @private
   * @returns {void}
   */
  private resetAutoPlay(): void {
    this.stopAutoPlay()
    this.startAutoPlay()
  }
}
