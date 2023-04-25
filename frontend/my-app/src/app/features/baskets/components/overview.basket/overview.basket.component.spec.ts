import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBasketComponent } from './overview.basket.component';

describe('OverviewBasketComponent', () => {
  let component: OverviewBasketComponent;
  let fixture: ComponentFixture<OverviewBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
