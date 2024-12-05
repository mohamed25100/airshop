import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({airBusState : AircraftsReducer}), //spécifie le reducer
    EffectsModule.forRoot([AircraftsEffects]), //spécifie les effects
    StoreDevtoolsModule.instrument() //en l'activant ici, à chaque action de NGRX, le plugin redux permet l'analyse du state durant le dev
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
