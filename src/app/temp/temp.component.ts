import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.sass']
})
export class TempComponent implements OnInit {
  expandCol: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(col: number): void {
    this.expandCol = this.expandCol === col ? -1 : col;
  }

}
