import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() taskListArr = [];
  @Output() notifyParentToSortTask = new EventEmitter();
  @Output() notifyParentToDeleteTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sortTask() {
    this.notifyParentToSortTask.emit();
  }

  deleteTask(index) {
    this.notifyParentToDeleteTask.emit(index);
  }

}
