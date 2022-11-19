import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-tasks',
  templateUrl: './test-tasks.component.html',
  styleUrls: ['./test-tasks.component.scss']
})
export class TestTasksComponent implements OnInit {
  @Input() changeState: (args: string) => void;

  constructor() { }

  ngOnInit(): void {
  }

}
