import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './login/login.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { OreComponent } from './dashboard/ore/ore.component';
import { PlayerComponent } from './dashboard/player/player.component';
import { SanctionComponent } from './dashboard/sanction/sanction.component';
import { EconomyComponent } from './dashboard/economy/economy.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { SettingComponent } from './dashboard/setting/setting.component';
import { ServerComponent } from './dashboard/server/server.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { PlayerDetailComponent } from './dashboard/player-detail/player-detail.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    OreComponent,
    PlayerComponent,
    SanctionComponent,
    EconomyComponent,
    SettingComponent,
    ServerComponent,
    FilterPipe,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule,
    MatRadioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
