import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-green-plus',
  imports: [],
  templateUrl: './green-plus.html',
  styleUrl: './green-plus.css',
})
export class GreenPlus {
    @Output() clicked = new EventEmitter<string>();

    notify () {
      this.clicked.emit("green-plus");
    }
}
