import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

const CIRCLE_CHECK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!
  Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License -
  https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>`

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  constructor(private readonly router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('circle-check', sanitizer.bypassSecurityTrustHtml(CIRCLE_CHECK));
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 3000);
  }

}
