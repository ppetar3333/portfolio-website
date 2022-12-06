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

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.fadeOut();
    this.fadeIn();
  }

  public fadeOut(): void {
    setTimeout(() => {
      this.hide = true;
      this.router.navigate(['home']);
    }, 500);
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.show = true;
    }, 1200);
  }
}
