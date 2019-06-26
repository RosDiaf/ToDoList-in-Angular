import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Todolist';
  taskListArr = [];

  ngOnInit() {
    this.getTasks();
  }

  ngOnChanges() {
    this.getTasks();
  }

  setTasks() {
    window.localStorage.setItem('items', JSON.stringify(this.taskListArr));
    this.getTasks();
  }

  getTasks() {
    this.taskListArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  }

  showTasks() {
    this.getTasks();
  }

  sortTask() {
    this.taskListArr.sort();
    this.setTasks();
  }

  deleteTask(index) {
    this.taskListArr.splice(index, 1);
    this.setTasks();
  }
}
