import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartitemsComponent } from './cartitems.component';

describe('CartitemsComponent', () => {
  let component: CartitemsComponent;
  let fixture: ComponentFixture<CartitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
