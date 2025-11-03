import { Component } from "@angular/core"
import type { ICarouselSlides } from "src/app/interface/ICarouselSlides"

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent {
  currentSlide = 0
  autoPlayInterval: any

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

  ngOnInit(): void {
    this.startAutoPlay()
  }

  ngOnDestroy(): void {
    this.stopAutoPlay()
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval)
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    this.resetAutoPlay()
  }

  goToSlide(index: number): void {
    this.currentSlide = index
    this.resetAutoPlay()
  }

  private resetAutoPlay(): void {
    this.stopAutoPlay()
    this.startAutoPlay()
  }
}
