import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowCaseComponent } from './product-show-case.component';

describe('ProductShowCaseComponent', () => {
  let component: ProductShowCaseComponent;
  let fixture: ComponentFixture<ProductShowCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductShowCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
