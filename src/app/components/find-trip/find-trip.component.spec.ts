import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTripComponent } from './find-trip.component';

describe('FindTripComponent', () => {
  let component: FindTripComponent;
  let fixture: ComponentFixture<FindTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindTripComponent]
    });
    fixture = TestBed.createComponent(FindTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
