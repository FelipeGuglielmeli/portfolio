import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 3000);
  }

}
