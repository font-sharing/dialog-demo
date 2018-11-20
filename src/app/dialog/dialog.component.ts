import { Component, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private overlayRef: OverlayRef) { }

  ngOnInit() {
  }

  close() {
    this.overlayRef.detach();
  }
}
