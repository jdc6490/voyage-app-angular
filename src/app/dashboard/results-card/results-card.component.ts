import { Component, OnInit } from '@angular/core';
import {ResultsService} from "./results.service";

@Component({
  selector: 'app-results-card',
  templateUrl: './results-card.component.html',
  styleUrls: ['./results-card.component.scss']
})
export class ResultsCardComponent implements OnInit {

  latestResults: any;

  constructor(private resultsService: ResultsService) { }

  async ngOnInit(): Promise<void> {
    this.latestResults = await this.resultsService.getMostRecentResults();
  }

}
