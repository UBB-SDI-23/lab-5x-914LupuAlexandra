import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBasketComponent } from './update.basket.component';

describe('UpdateBasketComponent', () => {
  let component: UpdateBasketComponent;
  let fixture: ComponentFixture<UpdateBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
