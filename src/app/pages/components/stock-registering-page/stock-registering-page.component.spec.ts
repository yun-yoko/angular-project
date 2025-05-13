import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRegisteringPageComponent } from './stock-registering-page.component';

describe('StockRegisteringPageComponent', () => {
  let component: StockRegisteringPageComponent;
  let fixture: ComponentFixture<StockRegisteringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockRegisteringPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRegisteringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
