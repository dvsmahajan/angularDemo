import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  [x: string]: any;

  constructor(private http: HttpClient) { }


  getPlayerDetails(pname){
    return this.http.get('https://cricapi.com/api/playerFinder?apikey=uRnYTs63G2gP0A3wg7kj2bTZZfG2&name='+ pname);
  }

  getPlayerDetailsById(pid){
    return this.http.get('https://cricapi.com/api/playerStats?apikey=uRnYTs63G2gP0A3wg7kj2bTZZfG2&pid='+ pid);
  }

  getUpcommingMatches(){
    return this.http.get('https://cricapi.com/api/matchCalendar?apikey=uRnYTs63G2gP0A3wg7kj2bTZZfG2');
  }
}
