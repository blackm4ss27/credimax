import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioDeSesionComponent } from './cliente/inicio-de-sesion/inicio-de-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioDeSesionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
