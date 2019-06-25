import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanitizerService } from '../shared/sanitizer';
import { AutofocusDirective } from '../shared/directive/autofocus.directive';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  listForm: FormGroup;
  tasksArr: Array<string> = [];
  @ViewChild('task') taskRef: ElementRef;
  @Output() showTasks = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private sanitizerService: SanitizerService,
              private el: ElementRef) { }

  ngOnInit() {
    this.buildUserForm();
  }

  buildUserForm() {
    this.listForm = this.formBuilder.group({
      task: this.formBuilder.control(null, [Validators.required, Validators.pattern('^(?=[0-9a-zA-Z ])([0-9A-Za-z ]*)+$')]),
    });
  }

  onSubmit() {
    if (this.listForm.valid) {
      this.sanitizeInputForm(this.listForm);
      this.tasksArr.push(this.listForm.controls.task.value);
      this.listForm.reset();
      this.taskRef.nativeElement.focus();
      this.showTasks.emit(this.tasksArr);
    }
  }

  sanitizeInputForm(form) {
    const value = form.value;
    value.task = this.sanitizerService.sanitizeInput(value.task);
  }

}
