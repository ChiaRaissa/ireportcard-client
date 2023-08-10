import { Injectable } from '@angular/core';
import {LocationEntity} from "../../models/entity/general/location.entity";
import {catchError, Observable, Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  currentLocation(): Observable<LocationEntity> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location: LocationEntity = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              name: position.coords.accuracy.toString()
            };
            observer.next(location);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }
}
