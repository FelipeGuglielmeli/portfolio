import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  @Input() elementId = '';

  constructor() { }

  ngOnInit(): void {
  }

}