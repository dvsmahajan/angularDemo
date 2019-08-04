import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {

  isNullData= false;
  constructor(private playerServer: PlayerService) { }

  columns = [ { prop: 'unique_id' }, { name: 'Name' }, { name: 'date' }];
  rows: any = [];
  temp: any = [];

  getFilters(start: Date){
    console.log(start);
    const dt: Date = new Date(start);
    const filteredData = this.temp.filter(data => (
      new Date(data.date).getDate() === dt.getDate() && new Date(data.date).getFullYear() === dt.getFullYear() && new Date(data.date).getMonth() === dt.getMonth()
    ));
    console.log(filteredData);
    this.rows = filteredData;
  }

  ngOnInit() {
    this.playerServer.getUpcommingMatches().subscribe(data =>{

      const d: any = data;
      // this.playerList = d.data;
      // console.log( this.playerList);
      this.isNullData = true;
      this.temp = [...d.data];
      this.rows = d.data;
      this.temp = d.data;
      console.log(this.rows);
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

}
