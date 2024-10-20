import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinContainerComponent } from './pin-container.component';

describe('PinContainerComponent', () => {
  let component: PinContainerComponent;
  let fixture: ComponentFixture<PinContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
