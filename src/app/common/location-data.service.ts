import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  constructor() { }

  LocationData = [
    { "id" : 1, "Name" : "Mississauga"},
    { "id" : 2, "Name" : "Brampton"}

  ]
}
