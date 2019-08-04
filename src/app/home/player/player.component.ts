import { PlayerService } from './../../services/player.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/';
import { PlayerStatisticsComponent } from '../player-statistics/player-statistics.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent{

  constructor(private player: PlayerService , private formBuilder: FormBuilder , private route:Router,public dialog: MatDialog) { }

  playerBuilder = this.formBuilder.group({
    pname: ['', Validators.required]
  });



  isListEmpty = false;
  playerList:any;

  columns = [ { prop: 'pid' }, { name: 'Name' }, { name: 'Action' }];
  rows: any = [];
  temp;

  findPlayer(){
    console.log(this.playerBuilder.get('pname').value);
    this.player.getPlayerDetails(this.playerBuilder.get('pname').value).subscribe(data => {
      const d: any = data;
      // this.playerList = d.data;
      // console.log( this.playerList);
      this.isListEmpty = true;
      this.temp = [...d.data];
      this.rows = d.data;
    },
    err => {
      console.log(err);
    });

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

  personDetail:any;

  getPlayer(id){
    console.log('pid is '+ id);
    this.route.navigate(['home/playerStatistics'] , { queryParams:{'pId': id}});

  }


  getPlayerPop(id){
    console.log(id);
    sessionStorage.setItem('id', id);
    this.dialog.open(PlayerStatisticsComponent);
  }

  // tslint:disable-next-line:member-ordering
}
