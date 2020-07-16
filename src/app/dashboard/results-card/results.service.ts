import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

  getMostRecentResults() {
    return new Promise(resolve => {
      resolve({
        resultType: 'PT / INR',
        readingType: 'Roche Vantus ~ Self Test',
        reading: 3.2,
        readingDate: new Date(),
        nextReadingDueDate: new Date(),
        carePlanLink: './test.pdf',
      });
    });
  }
}
