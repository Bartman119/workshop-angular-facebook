import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './interceptors/cache.interceptor';



@NgModule({
  declarations: [
    HighlightDirective,
    MyDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    MyDatePipe
  ],
  providers: [
    {
      useClass: CacheInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true
    }
  ] 
})
export class SharedModule { }
