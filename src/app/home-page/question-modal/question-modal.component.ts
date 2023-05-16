import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../shared/services/data.service";
import {Question} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent implements OnInit{
  addNewQuestionForm: FormGroup

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.addNewQuestionForm = new FormGroup({
      questionFormat: new FormControl('Text', [Validators.required]),
      questionText: new FormControl('', [Validators.required]),
      options: new FormArray([])
    })
  }
  addOption() {
    const optionGroup = new FormGroup({
      text: new FormControl ('', [Validators.required])
    });
    this.options.push(optionGroup);
  }

  removeOption(index: number) {
    this.options.removeAt(index);
  }

  get options() {
    return this.addNewQuestionForm.get('options') as FormArray;
  }

  addQuestion() {
    if (this.addNewQuestionForm.invalid) return
    const data: Question = {
      type: this.addNewQuestionForm.value.questionFormat,
      questionText: this.addNewQuestionForm.value.questionText,
      options: this.addNewQuestionForm.value.options.map((option: any) => (Object.values(option))).flat()
    }
    this.dataService.addQuestion(data)
  }
}
