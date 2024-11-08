import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root',
})
export class ApiNativaService {
  constructor() {}

  openIntelPage() {
    const url = 'https://www.intel.com';
    Browser.open({ url });
  }

  openAmdPage() {
    const url = 'https://www.amd.com';
    Browser.open({ url });
  }
}

