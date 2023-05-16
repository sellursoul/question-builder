import {Injectable} from "@angular/core";
import {Answer, Question} from "../interfaces/interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private questions: Question[] =  [
    {type:'textarea', questionText:'Please tell us about yourself:'},
    {type:'checkbox', questionText:'Choose languages that you know:', options:['Typescript','Python','C#','Other']},
  ];
  private answers: Answer[] = []
  private answersSubject = new BehaviorSubject<Answer[]>(this.answers)
  private questionsSubject = new BehaviorSubject<Question[]>(this.questions)


  answers$ = this.answersSubject.asObservable()
  questions$ = this.questionsSubject.asObservable()

  constructor(public dialog: MatDialog) {
  }

  setAnswersData(answer: any) {
    this.answers.push(answer);
    this.answersSubject.next(this.answers)
  }

  setQuestionsData() {
    this.questionsSubject.next(this.questions)
  }

  addQuestion(question: Question) {
    this.questions.push(question)
  }

  openDialog(wind: any) {
    const dialogRef = this.dialog.open(wind);
  }
}
