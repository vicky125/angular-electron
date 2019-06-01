import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  time:string;
  constructor() { }

  ngOnInit() {    
    this.runTime();
  }

  runTime()
  {
    setInterval(()=>{
      var d = new Date();
      var h = (d.getHours()<10?'0':'') + d.getHours();
      var m = (d.getMinutes()<10?'0':'') + d.getMinutes();
      var s = (d.getSeconds()<10?'0':'') + d.getSeconds();
      this.time = h+':'+m+':'+s; 
    },1000);    
  }



}
