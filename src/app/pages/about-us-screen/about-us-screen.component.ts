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
  aboutLink = [
    { route: "/", fragment: "como-ajudar" }
  ]

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller, private titleService: Title) { }


  ngOnInit(): void {
    this.titleService.setTitle('Sobre Nós • Projeto Piragui');
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
    this.navigateTo(route, fragment);
  }
}
