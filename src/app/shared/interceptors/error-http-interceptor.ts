import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, of, throwError } from "rxjs";

export class ErrorHttpInterceptor implements HttpInterceptor{

    constructor(private router : Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error:HttpErrorResponse) => {
                if(error && error.status == 401){
                    this.router.navigateByUrl('');
                }
                return throwError(() => new Error(error.message));
            })
        )
    }
}
