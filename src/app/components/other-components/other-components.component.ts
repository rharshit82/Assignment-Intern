import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-components',
  templateUrl: './other-components.component.html',
  styleUrls: ['./other-components.component.scss']
})
export class OtherComponentsComponent implements OnInit {
  @Input() testState: String;
  constructor() { }

  ngOnInit(): void {
  }

}
