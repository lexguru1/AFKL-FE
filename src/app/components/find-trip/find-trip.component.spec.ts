import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FindTripComponent } from './find-trip.component';

const bookingCode = 'PZIGZ3';
const familyName = 'HESP';

describe('FindTripComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [FindTripComponent],
    })
  );

  it('should render the find trip component', () => {
    const fixture = TestBed.createComponent(FindTripComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Find trip AFKL-FE'`, () => {
    const fixture = TestBed.createComponent(FindTripComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('Find trip AFKL-FE');
  });

  it(`should render two input fields and two labels'`, () => {
    const fixture = TestBed.createComponent(FindTripComponent);
    const component = fixture.debugElement.nativeElement;
    expect(component.querySelectorAll('input').length).toBe(2);
    expect(component.querySelectorAll('label').length).toBe(2);
  });

  it(`should render paragraph, horizontal rule and header 2'`, () => {
    const fixture = TestBed.createComponent(FindTripComponent);
    const component = fixture.debugElement.nativeElement;
    expect(component.querySelector('p')).toBeTruthy();
    expect(component.querySelector('hr')).toBeTruthy();
    expect(component.querySelector('h2')).toBeTruthy();
  });

  it(`should render input with id 'booking-code' and 'family-name`, () => {
    const fixture = TestBed.createComponent(FindTripComponent);
    const component = fixture.debugElement.nativeElement;

    expect(component.querySelectorAll('input')[0].getAttribute('id')).toBe(
      'booking-code'
    );
    expect(component.querySelectorAll('input')[1].getAttribute('id')).toBe(
      'family-name'
    );
  });

  it(`should change value of input fields`, () => {
    const fixture = TestBed.createComponent(FindTripComponent);
    const component = fixture.debugElement.nativeElement;
    const inputBooking = component.querySelectorAll('input')[0];
    const inputName = component.querySelectorAll('input')[1];
    inputBooking.value = bookingCode;
    inputName.value = familyName;
    expect(component.querySelectorAll('input')[0].value).toBe(bookingCode);
    expect(component.querySelectorAll('input')[1].value).toBe(familyName);
  });

  it(`should submit form`, fakeAsync(() => {
    const fixture = TestBed.createComponent(FindTripComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'findBooking');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const inputBooking =
      fixture.debugElement.nativeElement.querySelectorAll('input')[0];
    const inputName =
      fixture.debugElement.nativeElement.querySelectorAll('input')[1];
    inputBooking.value = bookingCode;
    inputName.value = familyName;
    button.click();
    tick();
    expect(component.findBooking).toHaveBeenCalled();
  }));
});
