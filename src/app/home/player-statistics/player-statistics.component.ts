import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-statistics',
  templateUrl: './player-statistics.component.html',
  styleUrls: ['./player-statistics.component.css']
})
export class PlayerStatisticsComponent implements OnInit {

  constructor(private playerService: PlayerService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {


    // let pid= this.activeRoute.snapshot.queryParamMap.get('pId');
    let pid = sessionStorage.getItem('id');
    this.getPlayerDetails(pid);
  }

  playerData:any;

  getPlayerDetails(pid){
    this.playerService.getPlayerDetailsById(pid).subscribe(data=>{
    this.playerData = data;
    console.log(data);
    })
  }
}
