import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnterYourTodo } from "./enter-your-todo/enter-your-todo";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnterYourTodo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TODO-App');
}
