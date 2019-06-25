import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Todolist';
  @Input() tasksArr: Array<string> = [];

  showTasks(tasks) {
    this.tasksArr = tasks.slice(0);
    console.log(this.tasksArr);
  }
}
