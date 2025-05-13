import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoadingComponent } from './core/components/loading/loading.component';
import { RoutingService } from './core/services/routing.service';
import { MaterialModule } from './material/material.module';
import { UrlConst } from './pages/constants/url-const';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoadingComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'product-manage-site-for-hands-on';
  constructor(private routingService: RoutingService) {}
  /**
   * Determines whether sign in page is displayed
   * @returns true if sign in page
   */
  public isSignInPage(): boolean {
    // console.log(
    //   'AppComponent #isSignInPage() this.routingService.router.url:' +
    //     this.routingService.router.url
    // );

    if (UrlConst.SLASH === this.routingService.router.url) {
      return true;
    }
    if (
      UrlConst.SLASH + UrlConst.PATH_SIGN_IN ===
      this.routingService.router.url
    ) {
      return true;
    }
    return false;
  }
}
