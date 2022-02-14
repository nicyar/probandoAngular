import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDestacadasComponent } from './product-destacadas.component';

describe('ProductDestacadasComponent', () => {
  let component: ProductDestacadasComponent;
  let fixture: ComponentFixture<ProductDestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDestacadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
