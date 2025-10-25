import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsScreenComponent } from './about-us-screen.component';

describe('AboutUsScreenComponent', () => {
  let component: AboutUsScreenComponent;
  let fixture: ComponentFixture<AboutUsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsScreenComponent]
    });
    fixture = TestBed.createComponent(AboutUsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
