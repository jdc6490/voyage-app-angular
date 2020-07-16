import { Component, OnInit } from '@angular/core';
import {ProviderService} from "./provider.service";

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss']
})
export class ProviderCardComponent implements OnInit {
  providerData: any;

  constructor(private providerService: ProviderService) { }

  async ngOnInit(): Promise<void> {
    this.providerData = await this.providerService.getProviderInfo(1);
    console.log(this.providerData);
  }

}
