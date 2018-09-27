import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomSideNavService {

  constructor() { }
  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    console.log('insdie service');
    this.change.emit(this.isOpen);
  }
}
