import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  idSelection =  ''


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToComponent(componentId: string) {
    const element = this.elementRef.nativeElement.querySelector('#'+componentId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
      console.log('destroy')
  }

}
