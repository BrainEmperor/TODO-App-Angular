import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-red-minus',
  imports: [],
  templateUrl: './red-minus.html',
  styleUrl: './red-minus.css',
})
export class RedMinus {
    @Output() clicked = new EventEmitter();

    notify(){
      this.clicked.emit();
    }
}
