import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanitizerService } from '../shared/sanitizer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  listForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private sanitizerService: SanitizerService) { }

  ngOnInit() {
    this.buildUserForm();
  }

  buildUserForm() {
    this.listForm = this.formBuilder.group({
      task: this.formBuilder.control(null, [Validators.required, Validators.pattern('^(?=[a-zA-Z ])([A-Za-z ]*)+$')]),
    });
  }

  onSubmit() {
    if (this.listForm.valid) {
      this.sanitizeInputForm(this.listForm);
    }
  }

  sanitizeInputForm(form) {
    const value = form.value;
    value.task = this.sanitizerService.sanitizeInput(value.task);
  }

}
