import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { SanitizerService } from '../shared/sanitizer';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule, FormsModule ],
      providers: [ SanitizerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form', () => {
    const TaskKey = 'task';
    it('should submit the task when data is dalid', () => {
      component.listForm.controls[TaskKey].setValue('task 1');
      let spySanitizeField = spyOn(component, 'sanitizeInputForm');
      component.onSubmit();
      expect(spySanitizeField).toHaveBeenCalledWith(component.listForm);
    });

    it('should not submit the task when data is not dalid', () => {
      component.listForm.controls[TaskKey].setValue('%££<>1&&&&');
      let spySanitizeField = spyOn(component, 'sanitizeInputForm');
      component.onSubmit();
      expect(spySanitizeField).not.toHaveBeenCalledWith(component.listForm);
    });
  })
});
