import { Component,Input} from '@angular/core';
import {Lap} from './lap.model';
@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  btnStart = "Start";
  btnStartClass = "btn btn-success"
  btnResetLap = "Reset";
  btnResetLapClass = "btn btn-info";
  hours : number;
  minutes: number;
  seconds : number;
  miliseconds : number;
  isPaused : boolean;
  lstLap : Lap[] = new Array<Lap>();
  lapCount : number;
 
  constructor() {
    
    this.reset();
    setInterval(() => this.tick(), 100);
   
  }

  tick() : void {

    if(!this.isPaused){
        this.miliseconds ++;
        if(this.miliseconds == 10){
            this.miliseconds = 0;
            this.seconds ++;
        }
            
        if(this.seconds == 60){
            this.seconds = 0;
            this.minutes ++;
        }
        if(this.minutes == 60){
            this.minutes = 0;
            this.hours ++;
        }

    }

  };

  /**Chronometer pause */
  pause() : void {

  } ;
  
  /** reset values to default */
  reset() : void {
      this.hours = 0;
      this.minutes = 0;
      this.seconds  = 0;
      this.miliseconds = 0;
      this.isPaused = true;
      this.lapCount = 1;
      this.lstLap = [];
  }

  /** format number to 2 digits */
  formatNumber(number): string {
    return ((number < 10 ? '0' : '') + number).toString();
  }

  getTimeStr() : string {
    return this.formatNumber(this.hours) + ":"
            + this.formatNumber(this.minutes) + ":"
            + this.formatNumber(this.seconds) + ":" 
            + this.formatNumber(this.miliseconds);
  }

  /**btn event reset/lap */
  resetLap() : void {

     if(this.isPaused){
        this.reset();
     }
     else{
        this.lstLap.push(<Lap>{
          position : this.lapCount ++,
          time : this.getTimeStr()    
        })
       
     }
       
    
  };

  /**btn event start/pause */
  startPause() : void {
    
    if(this.isPaused){
      this.isPaused = false;
      this.btnStart = "Pause";
      this.btnStartClass = "btn btn-danger";
      this.btnResetLap = "Lap";
      
    }
    else{
      this.isPaused = true;
      this.btnStart = "Start";
      this.btnStartClass = "btn btn-success";
      this.btnResetLap = "Reset";
    
    }
  
  };


 
}