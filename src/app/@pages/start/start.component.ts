import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'start-page',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.checkPath();
  }

  public checkPath(): void {
    let item = sessionStorage.getItem('fade-out');
    if (item === 'true') {
      this.router.navigate(['home']);
    }
  }
}
