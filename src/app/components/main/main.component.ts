import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  idSelection =  ''


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToComponent(componentId: string) {
    const element = this.elementRef.nativeElement.querySelector('#'+componentId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
