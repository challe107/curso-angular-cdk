import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'success';

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    return {
      'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'danger',
      'text-gray-700': this.color === 'gray-light',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-danger-700': this.color === 'danger',
      'hover:bg-danger-800': this.color === 'danger',
      'focus:ring-danger-300': this.color === 'danger',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light',
      'focus:ring-gray-50': this.color === 'gray-light',
    };
  }

}
