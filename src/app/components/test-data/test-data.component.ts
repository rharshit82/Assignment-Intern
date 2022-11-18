import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import data from './data.json'
@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.scss']
})
export class TestDataComponent implements OnInit {
  lis = [];
  constructor(private http : HttpClient) { 
    
  }

  ngOnInit(): void {
    this.lis = data;
    console.log(this.lis)
  }

}
