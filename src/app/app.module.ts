import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { SanitizerService } from './shared/sanitizer';
import { AutofocusDirective } from './shared/directive/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AutofocusDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ SanitizerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
