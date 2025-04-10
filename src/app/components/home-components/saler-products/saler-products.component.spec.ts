import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalerProductsComponent } from './saler-products.component';

describe('SalerProductsComponent', () => {
  let component: SalerProductsComponent;
  let fixture: ComponentFixture<SalerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalerProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
