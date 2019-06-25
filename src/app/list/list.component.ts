import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() tasksArr: Array<string> = [];
  taskListArr = [];

  constructor() { }

  ngOnInit() {
    this.getTasks();
  }

  ngOnChanges() {
    this.getTasks();
  }

  getTasks() {
    this.taskListArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  }

  deleteTask(index) {
    this.taskListArr.splice(index, 1);
    window.localStorage.setItem('items', JSON.stringify(this.taskListArr));
  }

}
