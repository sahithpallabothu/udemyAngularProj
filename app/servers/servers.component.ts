import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean=false;
  serverCreationStatus:string="No Server Created";
  serverValue:string='Test Value';
  isServerCreated:boolean=false;
  serversList=['Test Server1','Test Server2'];
  serverName:string='Test Server1';
  userName:string=''
  isDisplay:boolean=false;
  logNumbers=[];
  constructor() {

    setTimeout(()=>{
      this.allowNewServer=true;
    },4000);
   }

  ngOnInit() {
  }
  onUpdateServer(event){
    
    this.serverValue=event.target.value;
  }

  onDisaplayDetails(){
   this.isDisplay=!this.isDisplay;
   this.logNumbers.push(this.logNumbers.length+1);
  }

  onCreateServer(){
    this.serversList.push(this.serverName);
    this.isServerCreated=true;
    this.serverCreationStatus="Server Created"
  }

}
