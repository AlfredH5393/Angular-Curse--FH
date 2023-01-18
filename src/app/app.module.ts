import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes de app module
import { AppComponent } from './app.component';

//Modulos
import { HeroModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
