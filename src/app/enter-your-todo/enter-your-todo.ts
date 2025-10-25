import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { GreenPlus } from "../green-plus/green-plus";
import { RedMinus } from "../red-minus/red-minus";
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-enter-your-todo',
  imports: [GreenPlus, RedMinus, CommonModule, FormsModule],
  templateUrl: './enter-your-todo.html',
  styleUrl: './enter-your-todo.css',
})

export class EnterYourTodo {
tasks : string[] = [];
taskarea: string="";
    AddTask(message : string){
        if(this.taskarea!==""){
          this.tasks.push(this.taskarea);
          this.taskarea="";
        }
    }

    RemoveTask(){
      if(this.tasks.length!==0){
        this.tasks.pop();
      }
    }
}

export class Task{
  description:string;
  constructor (description:string){
    this.description=description;
  }
} 
