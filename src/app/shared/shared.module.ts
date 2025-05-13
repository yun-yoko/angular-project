import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SidenavComponent, HeaderComponent, FooterComponent],
  exports: [SidenavComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
