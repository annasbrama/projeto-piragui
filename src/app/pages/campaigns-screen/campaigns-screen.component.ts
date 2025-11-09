import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-campaigns-screen',
  templateUrl: './campaigns-screen.component.html',
  styleUrls: ['./campaigns-screen.component.css']
})
export class CampaignsScreenComponent implements OnInit {

  campaignsLink = [
    { route: "/", fragment: "como-ajudar" }
  ]

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Nossas Ações • Projeto Piragui');
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
