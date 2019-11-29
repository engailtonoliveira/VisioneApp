import { Observable, throwError } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';

import { catchError } from 'rxjs/operators';

export class HttpIntercept implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse) {
                    // server-side error
                    console.log('Server side', error);
                    return throwError(error);
                } else {
                    console.log('Client Side', error);
                    // client-side error
                    return throwError(error);
                }
            })
        )
    }
}