import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsScreenComponent } from './campaigns-screen.component';

describe('CampaignsScreenComponent', () => {
  let component: CampaignsScreenComponent;
  let fixture: ComponentFixture<CampaignsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsScreenComponent]
    });
    fixture = TestBed.createComponent(CampaignsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
