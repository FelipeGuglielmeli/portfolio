import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  langs = [{
    name: 'HTML',
    anos: 2
  },
  {
    name: 'CSS',
    anos: 2,
  },
  {
    name: 'JavaScript',
    anos: 2,
  },
  {
    name: 'Angular',
    anos: 1,
  },
  {
    name: 'Node.Js',
    anos: 1,
  },
  {
    name: 'Java',
    anos: 1,
  },
  {
    name: 'TypeScript',
    anos: 1,
  },]

  constructor() { }

  ngOnInit(): void {
  }

}
