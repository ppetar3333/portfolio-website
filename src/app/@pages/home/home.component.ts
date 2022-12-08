import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isProcessing: boolean = false;
  public sentences: Array<string> = [];

  constructor() { 
    this.sentences = [
      "Hello!",
      "I'm Petar Petrović",
      "Welcome to my website!"
    ]
  }

  public ngOnInit(): void {
    this.fadeIn();
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.isProcessing = true;
    }, 50);
  }
}
