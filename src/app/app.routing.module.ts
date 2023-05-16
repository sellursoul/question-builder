import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AnswersComponent} from "./answers/answers.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'form', component: HomePageComponent},
      {path:'form/answers', component: AnswersComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
