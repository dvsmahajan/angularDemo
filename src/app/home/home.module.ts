import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutRoutingModule } from './home-rout-routing.module';
import { HeaderComponent } from '../commons/header/header.component';
import { SidebarComponent } from '../commons/sidebar/sidebar.component';
import { PlayerComponent } from './player/player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PlayerStatisticsComponent } from './player-statistics/player-statistics.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { MatIconModule, MatListModule, MatToolbarModule, MatSidenavModule} from '@angular/material/';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, SidebarComponent, PlayerComponent, PlayerStatisticsComponent, UpcommingComponent],
  imports: [
    CommonModule,
    HomeRoutRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [PlayerComponent ]
})
export class HomeModule { }
