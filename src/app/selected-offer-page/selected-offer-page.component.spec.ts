import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedOfferPageComponent } from './selected-offer-page.component';

describe('SelectedOfferPageComponent', () => {
  let component: SelectedOfferPageComponent;
  let fixture: ComponentFixture<SelectedOfferPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedOfferPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedOfferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
