import { Component, Input, OnInit, SimpleChanges  } from '@angular/core';
import data from './data.json'
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.scss']
})
 

export class TestDataComponent implements OnInit {
  @Input() lis = [];
  constructor(private _snackBar: MatSnackBar) { 
    
  }
  openSnackBar(val: string) {
    this._snackBar.open(val, 'Copied', {
      duration: 2000
    });
  }
  convertFromMili (x:number): string{
    let milliseconds: number = Math.trunc((x%1000)/100)
    let seconds: number = Math.trunc((x/1000)%60)
    let minutes: number = Math.trunc((x/(1000*60))%60)
    let hours: number = Math.trunc((x/(1000*60*60))%24)
  
    let hourstring:string  = (hours < 10) ? "0" + hours.toString() : hours.toString();
    let minutestring:string  = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
    let secondstring:string = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();
  
    return hourstring + ":" + minutestring + ":" + secondstring + "." + milliseconds;
  }
  copyMessage(val: string){
    this.openSnackBar(val);
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  changeData(): void {
    this.lis = data;
  }
  ngOnInit(): void {
    this.changeData();
  }
  ngOnDestroy(): void{
    this.lis = []
  }
  
}
