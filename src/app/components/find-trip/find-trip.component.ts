import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.css'],
})
export class FindTripComponent {
  title = 'Find trip AFKL-FE';

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
  mockData = [
    {
      bookingCode: 'PZIGZ3',
      contactDetails: [
        {
          '@class': 'EmailAddress',
          address: 'TRAINER@YAHOO.FR',
        },
      ],
      itinerary: {
        type: 'ONE_WAY',
        connections: [
          {
            id: 1,
            duration: '120',
            origin: {
              IATACode: 'AMS',
              name: 'Schiphol',
              city: {
                IATACode: 'AMS',
                name: 'Amsterdam',
                country: {
                  code: 'NL',
                  name: 'The Netherlands',
                },
              },
            },
            destination: {
              IATACode: 'NCE',
              name: "Cote D'Azur Airport",
              city: {
                IATACode: 'NCE',
                name: 'Nice',
                country: {
                  code: 'FR',
                  name: 'France',
                },
              },
            },
            segments: [
              {
                id: 2,
                type: 'LOCAL',
                informational: false,
                departFrom: {
                  IATACode: 'AMS',
                  name: 'Schiphol',
                  city: {
                    IATACode: 'AMS',
                    name: 'Amsterdam',
                    country: {
                      code: 'NL',
                      name: 'The Netherlands',
                    },
                  },
                },
                arriveOn: {
                  IATACode: 'NCE',
                  name: "Cote D'Azur Airport",
                  city: {
                    IATACode: 'NCE',
                    name: 'Nice',
                    country: {
                      code: 'FR',
                      name: 'France',
                    },
                  },
                },
                marketingFlight: {
                  number: '1263',
                  carrier: {
                    code: 'KL',
                    name: 'KLM',
                  },
                  status: {
                    code: 'CONFIRMED',
                    name: 'Confirmed',
                  },
                  numberOfStops: 0,
                  sellingClass: {
                    code: 'Z',
                  },
                  operatingFlight: {
                    number: '1263',
                    carrier: {
                      code: 'KL',
                      name: 'KLM',
                    },
                    duration: 'PT2H',
                    flown: false,
                    checkInStart: '2016-10-13T03:35+02:00',
                    localCheckInStart: '2016-10-13T03:35',
                    checkInEnd: '2016-10-14T08:35+02:00',
                    localCheckInEnd: '2016-10-14T08:35',
                    scheduledArrival: '2016-10-14T11:35+02:00',
                    localScheduledArrival: '2016-10-14T11:35',
                    scheduledDeparture: '2016-10-14T09:35+02:00',
                    localScheduledDeparture: '2016-10-14T09:35',
                    arrivalTerminal: {
                      name: '2',
                    },
                    cabin: {
                      code: '10',
                      name: 'Business',
                    },
                    equipment: {
                      code: '73H',
                      name: 'Boeing 737-800',
                    },
                  },
                },
              },
            ],
          },
        ],
      },
      passengers: {
        id: 1,
        firstName: 'RUUD',
        lastName: 'HESP',
        title: {
          code: 'MR',
          name: 'Mr',
        },
      },
    },
  ];
  bookingFound: any = undefined;
  bookingNotFound: any = undefined;
  findBooking() {
    const book = this.mockData.find(
      (item) =>
        item.bookingCode === this.bookingCode.value &&
        item.passengers.lastName === this.familyName.value
    );
    if (book) {
      this.bookingFound = book;
      this.bookingCode.reset();
      this.familyName.reset();
    } else {
      this.bookingNotFound = true;
      this.bookingCode.reset();
      this.familyName.reset();
    }
  }
}
