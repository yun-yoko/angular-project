import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UrlConst } from '../../pages/constants/url-const';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(public router: Router) {}
  /**
   * Navigates to path.
   * @param path path to pages.
   */
  public navigate(path: string) {
    // navigates to path.
    this.router.navigate([UrlConst.SLASH + path]);
  }
}
