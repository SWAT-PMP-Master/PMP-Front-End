import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SpinnerService } from './core/services/spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private spinnerService: SpinnerService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.spinnerService.playSpinner();
    return next.handle(request).pipe(
      finalize(() => {
        this.spinnerService.stopSpinner();
      })
    );
  }
}
