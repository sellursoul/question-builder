import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../shared/services/data.service";
import {Answer, Question} from "../../shared/interfaces/interfaces";
import {Router} from "@angular/router";
import {combineLatest} from "rxjs";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {QuestionModalComponent} from "../question-modal/question-modal.component";


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  questionForm: FormGroup
  showOther: boolean = false
  questions: Question[]

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.dataService.questions$.subscribe(data => {
      this.questions = data
    })
    this.questionForm = this.fb.group({
      textAnswer: '',
      checkboxes: new FormArray([]),
      otherText: ['']
    })
  }

  onCheckChange(event: MatCheckboxChange, checkBoxValue: string) {
    const formArray: FormArray = this.questionForm.get('checkboxes') as FormArray;

    if (event.checked) {
      formArray.push(new FormControl(checkBoxValue));
      if (checkBoxValue === 'Other') {
        this.questionForm.addControl('otherText', new FormControl(''))
        this.showOther = true
      }
    } else {
      const index = formArray.controls.findIndex((ctrl: AbstractControl) => ctrl.value === checkBoxValue);
      if (index !== -1) {
        formArray.removeAt(index);
      }
      if (checkBoxValue === 'Other') {
        this.questionForm.removeControl('otherText')
        this.showOther = false
      }
    }
  }

  openModal() {
    this.dataService.openDialog(QuestionModalComponent)
  }

  addAnswer() {
    if (this.questionForm.invalid) {
      return
    }

    const answers: Answer[] = [];
    this.dataService.questions$.subscribe(data => data.forEach((question: any) => {
      if (question.type === 'textarea') {
        const answer: Answer = {
          question: question.questionText,
          answer: this.questionForm.value.textAnswer,
        };
        answers.push(answer);
      } else if (question.type === 'checkbox') {
        let checkboxesValue = this.questionForm.value.checkboxes;
        if (checkboxesValue.includes('Other')) {
          checkboxesValue = checkboxesValue.filter((el: string) => el !== 'Other')
          checkboxesValue.push(this.questionForm.value.otherText)
        }
        const answer: Answer = {
          question: question.questionText,
          checkboxes: checkboxesValue
        };
        answers.push(answer);
      }
    }));
    this.dataService.setAnswersData(answers);
    console.log(answers)
    this.router.navigate(['/form', 'answers'])
  }
}
