import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'dummy-purchasing-page',
        loadChildren: () =>
          import(
            './super-user-pages/dummy-purchasing-page/dummy-purchasing-page.module'
          ).then((m) => m.DummyPurchasingPageModule),
      },
    ]),
    CommonModule,
    CoreModule,
    SharedModule,
    PagesModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class AppModule {}
