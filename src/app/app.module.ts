import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {AnswersComponent} from "./answers/answers.component";
import {HeaderComponent} from "./shared/main-layout/header/header.component";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule} from "@angular/router";
import {ModalWindowComponent} from "./home-page/modal-window/modal-window.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {QuestionModalComponent} from "./home-page/question-modal/question-modal.component";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    HeaderComponent,
    MainLayoutComponent,
    HomePageComponent,
    ModalWindowComponent,
    QuestionModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
