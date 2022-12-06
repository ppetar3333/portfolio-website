import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public isProgressing: boolean = false;

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.fadeOut();
  }

  public fadeOut(): void {
    setTimeout(() => {
      this.isProgressing = true;
      this.redirectUser();
    }, 1300);
  }

  public redirectUser(): void {
    setTimeout(() => {
      this.router.navigate(['home'])      
    }, 1301);
  }
}
