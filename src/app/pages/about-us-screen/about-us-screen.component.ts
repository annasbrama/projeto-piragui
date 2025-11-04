import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us-screen',
  templateUrl: './about-us-screen.component.html',
  styleUrls: ['./about-us-screen.component.css']
})
export class AboutUsScreenComponent {
  aboutLink = [
    { route: "/", fragment: "como-ajudar" }
  ]

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller
  ) { }

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
