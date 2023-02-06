import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public hide: boolean = false;
  public show: boolean = false;
  public item: any;

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.router.navigate(['home']);
    this.checkStartPage();
    this.checkLocalStorage();
  }

  public checkStartPage(): void {
    this.item = JSON.stringify(sessionStorage.getItem('fade-out'));
    if (this.item === 'null') {
      this.item = '';
      this.fadeOut();
      this.fadeIn();
    } else {
      this.show = true;
    }
  }

  public checkLocalStorage(): void {
    if (!localStorage.getItem('current_page')) {
      localStorage.setItem('current_page', 'home');
      this.router.navigate(['home']);
    }
  }

  public fadeOut(): void {
    sessionStorage.setItem('fade-out', JSON.stringify(true));
    setTimeout(() => {
      this.hide = true;
      this.router.navigate(['home']);
    }, 2200);
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.show = true;
    }, 2900);
  }
}
