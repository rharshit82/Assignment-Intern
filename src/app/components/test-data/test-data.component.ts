import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import data from './data.json'

function convertFromMili (x:number): string{
  let milliseconds: number = Math.trunc((x%1000)/100)
  let seconds: number = Math.trunc((x/1000)%60)
  let minutes: number = Math.trunc((x/(1000*60))%60)
  let hours: number = Math.trunc((x/(1000*60*60))%24)

  let hourstring:string  = (hours < 10) ? "0" + hours.toString() : hours.toString();
  let minutestring:string  = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
  let secondstring:string = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();

  return hourstring + ":" + minutestring + ":" + secondstring + "." + milliseconds;
}
@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.scss']
})
 

export class TestDataComponent implements OnInit {
  lis = [];
  constructor(private http : HttpClient) { 
    
  }
 
  copyMessage(val: string){
    console.log("helo")
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
  ngOnInit(): void {
    this.lis = data;
    // this.lis = this.lis.slice(0, 10)
    this.lis.forEach((ele) =>{
      ele.RunTime = convertFromMili(ele.RunTime)
      ele.Results[0].RunTime = convertFromMili(ele.Results[0].RunTime)
      ele.Results[1].RunTime = convertFromMili(ele.Results[1].RunTime)
    })
    console.log(this.lis)
  }
  
}
