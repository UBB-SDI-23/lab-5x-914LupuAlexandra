import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBasketComponent } from './details.basket.component';

describe('DetailsBasketComponent', () => {
  let component: DetailsBasketComponent;
  let fixture: ComponentFixture<DetailsBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
