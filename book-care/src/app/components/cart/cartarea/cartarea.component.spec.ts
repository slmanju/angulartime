import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartareaComponent } from './cartarea.component';

describe('CartareaComponent', () => {
  let component: CartareaComponent;
  let fixture: ComponentFixture<CartareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
