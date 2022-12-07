import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public isProcessing: boolean = false;

  constructor(
    private router: Router,
    private el: ElementRef, 
  ) { }

  public ngOnInit(): void { 
    this.setupDefaultPage();
    this.fadeIn();
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.isProcessing = true;
    }, 50);
  }

  public setupDefaultPage(): void {
    localStorage.setItem('current_page', `/home`);
  }

  public navigation(event: any, route: string): void {
    localStorage.setItem('current_page', `/${route}`);
    event.preventDefault();
    let box = this.el.nativeElement.querySelectorAll(".box");
    box.forEach((element: any) => { element.classList.remove('active'); });
    if (event.path[2].classList[0] === 'box') {
      event.path[2].classList.add('active');
    } else {
      event.path[1].classList.add('active');
    }
    this.changeRoute(route);
  }

  public changeRoute(route: string) {
    switch (route) {
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'about':
        this.router.navigate(['about']);
        break;
      case 'expirience':
        this.router.navigate(['expirience']);      
        break;
      case 'work':
        this.router.navigate(['work']);
        break;
      case 'contact':
        this.router.navigate(['contact']);
        break;
      default:
        this.router.navigate(['home']);
        break;
    }
  }
}
