import { PlayerStatisticsComponent } from './player-statistics/player-statistics.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PlayerComponent } from './player/player.component';
import { UpcommingComponent } from './upcomming/upcomming.component';

const routes: Routes = [
//  {
//   path: 'index',
//   component: HomeComponent,
//   children: [
//     {
//       path: 'player',
//       component: PlayerComponent
//     },
//     {
//       path: 'playerStatistics',
//       component: PlayerStatisticsComponent
//     }
//   ]
//  }
{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'player',
      component: PlayerComponent
    },
    {
      path: 'playerStatistics',
      component: PlayerStatisticsComponent
    },
    {
      path: 'upcomingMatches',
      component: UpcommingComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutRoutingModule { }
