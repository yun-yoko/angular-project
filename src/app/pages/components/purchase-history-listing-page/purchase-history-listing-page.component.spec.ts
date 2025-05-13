import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistoryListingPageComponent } from './purchase-history-listing-page.component';

describe('PurchaseHistoryListingPageComponent', () => {
  let component: PurchaseHistoryListingPageComponent;
  let fixture: ComponentFixture<PurchaseHistoryListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseHistoryListingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseHistoryListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
