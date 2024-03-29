import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';
import { SommaComponent } from './somma/somma.component';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, LoginFormComponent, SommaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
