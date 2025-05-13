import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// if (environment.production) {
//   enableProdMode();
//   // Do not output console log
//   window.console.log = () => {};
// }

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
