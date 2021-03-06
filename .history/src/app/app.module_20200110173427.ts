import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DishService } from './services/dish.service';
import { LeaderService } from './services/leader.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { PromotionService } from './services/promotion.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DishService,
    LeaderService,
    ProcessHttpmsgService,
    PromotionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
