import { Component, OnInit } from '@angular/core';

@Component({
  /*Using Selector as attribute */
  //selector: '[app-server]',
  /*using selector as class */
  //selector:'.app-server',
  /*Using selector as element */
  selector:'app-server',
  templateUrl: './app-server.component.html',
  styleUrls: ['./app-server.component.css']
})
export class AppServerComponent implements OnInit {
  
  serverID:number=10;
  serverStatus:string='offline';

  constructor() { 
    this.serverStatus=Math.random() >0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }
  getColor(){
    return this.serverStatus==='online'?'green':'red';
  }

  getServerStatus(){
    return this.serverStatus;
  }

}
