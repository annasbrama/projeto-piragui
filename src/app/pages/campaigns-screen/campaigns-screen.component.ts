import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns-screen',
  templateUrl: './campaigns-screen.component.html',
  styleUrls: ['./campaigns-screen.component.css']
})
export class CampaignsScreenComponent {

  campaignsLink = [
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
