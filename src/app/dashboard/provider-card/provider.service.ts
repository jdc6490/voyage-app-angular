import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  getProviderInfo(providerId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve({
        name: 'Bassett Healthcare Network',
        phoneNumber: '123-456-7890',
        logoUrl: 'assets/images/bassett-logo-header.svg',
      });
    });
  }
}
