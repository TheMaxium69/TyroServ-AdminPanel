import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./dashboard/home/home.component";
import {OreComponent} from "./dashboard/ore/ore.component";
import {SanctionComponent} from "./dashboard/sanction/sanction.component";
import {PlayerComponent} from "./dashboard/player/player.component";
import {EconomyComponent} from "./dashboard/economy/economy.component";
import {SettingComponent} from "./dashboard/setting/setting.component";
import {ServerComponent} from "./dashboard/server/server.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ore', component: OreComponent},
  {path: 'sanction', component: SanctionComponent},
  {path: 'player', component: PlayerComponent},
  {path: 'player/:id', component: PlayerComponent},
  {path: 'economy', component: EconomyComponent},
  {path: 'server', component: ServerComponent},
  {path: 'setting', component: SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
