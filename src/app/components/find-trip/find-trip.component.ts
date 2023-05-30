import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.css'],
})
export class FindTripComponent {
  bookingCode = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(6),
    Validators.pattern('^[a-zA-Z 2-9]*$'),
  ]);
  familyName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('^[a-zA-Z ]*$'),
  ]);
}
