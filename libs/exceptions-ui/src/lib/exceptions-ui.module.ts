import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionsUiComponent } from './exceptions-ui.component';
import { NgrxExceptionsModule } from '@ne/ngrx-exceptions';
import { ExceptionListComponent } from './exception-list.component';
import { ExceptionListItemComponent } from './exception-list-item.component';
import { ExceptionDetailComponent } from './exception-detail.component';

@NgModule({
  imports: [CommonModule, NgrxExceptionsModule],
  declarations: [ExceptionsUiComponent, ExceptionListComponent, ExceptionListItemComponent, ExceptionDetailComponent],
  exports: [ExceptionsUiComponent]
})
export class ExceptionsUiModule {}
