import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public isProcessing: boolean = false;

  constructor() { }

  public ngOnInit(): void {
    this.fadeIn();
  }

  public fadeIn(): void {
    setTimeout(() => {
      this.isProcessing = true;
    }, 50);
  }
}
