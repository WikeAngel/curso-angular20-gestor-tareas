import { Component, input, output } from '@angular/core';
import { Task } from '../../../features/tareas/task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {

  task = input.required<Task>();
  toggle = output<number>(); // Esto va emitir un evento al padre para que acutalice la tarea
  removed = output<number>(); // Esto va emitir un evento al padre para que elimine la tarea
}
