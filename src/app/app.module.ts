import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// -- Components
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

// -- Shared
import { SanitizerService } from './shared/sanitizer';
import { AutofocusDirective } from './shared/directive/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AutofocusDirective,
    ListComponent
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
