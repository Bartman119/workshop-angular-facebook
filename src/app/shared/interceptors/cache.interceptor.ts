import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType
} from '@angular/common/http';
import { filter, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const cache = new Map();
const CACHE_TIME = 1000 * 5;

@Injectable()
export class CacheInterceptor implements HttpInterceptor {


  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercept', { request, next });

    if (cache.has(request.url)) {
      console.log('Cache: return from cache', request.url);
      const record = cache.get(request.url);

      if(record.ttl + environment.requestCacheTime > Date.now()) {
        return of(record.response);
      } else {
        cache.delete(request.url);
      }
    }
    return next.handle(request).pipe(
      tap((response) => {
        if (response.type !== HttpEventType.Response) {
          return;
        }
        cache.set(response.url,  response.clone());
        console.log('Cache: saving',  {
          response: response.url,
          ttl: Date.now(),
        });
      })
    );
  }
}
