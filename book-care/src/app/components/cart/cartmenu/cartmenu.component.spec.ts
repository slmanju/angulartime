import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartmenuComponent } from './cartmenu.component';

describe('CartmenuComponent', () => {
  let component: CartmenuComponent;
  let fixture: ComponentFixture<CartmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
