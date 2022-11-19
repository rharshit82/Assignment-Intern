import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-test-maintenance',
  templateUrl: './system-test-maintenance.component.html',
  styleUrls: ['./system-test-maintenance.component.scss']
})
export class SystemTestMaintenanceComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  testState: string = "";
  isLoading: boolean = false
  changeState = (newState: string) =>{
    this.isLoading = true
    setTimeout(() =>{
      this.isLoading = false;
    }, 1000)
    this.testState = newState;
  }

}
