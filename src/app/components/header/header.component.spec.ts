import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    })
  );

  it('should render the header component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Header AFKL-FE'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('Header AFKL-FE');
  });

  it(`should render a paragraph`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('p')).toBeTruthy();
  });

  it(`should render text 'CHECK-IN'`, () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('p').innerHTML).toContain('CHECK-IN');
  });
});
