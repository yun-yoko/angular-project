import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DummyPurchasingPageComponent } from './dummy-purchasing-page.component';


const routes: Routes = [
  { path: '', component: DummyPurchasingPageComponent }
];

@NgModule({
  declarations: [
    DummyPurchasingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DummyPurchasingPageModule { }
