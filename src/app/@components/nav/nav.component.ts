import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor(
    private el: ElementRef, 
  ) { }

  public ngOnInit(): void { }

  public navigation(event: any): void {
    event.preventDefault();
    let box = this.el.nativeElement.querySelectorAll(".box");
    box.forEach((element: any) => { element.classList.remove('active'); });
    if (event.path[2].classList[0] === 'box') {
      event.path[2].classList.add('active');
    } else {
      event.path[1].classList.add('active');
    }
  }
}
