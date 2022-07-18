import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-somma',
  templateUrl: './somma.component.html',
  styleUrls: ['./somma.component.css'],
})
export class SommaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input () ADDENDO1: number|null;
  @Input () ADDENDO2: number|null;
}
