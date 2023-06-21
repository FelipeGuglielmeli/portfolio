import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() elementId = '';
  @Output() idSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectId(id:string) {
    this.idSelected.emit(id)
  }

}
