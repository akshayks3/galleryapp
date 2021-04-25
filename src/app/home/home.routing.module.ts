import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoggedHomeComponent } from "./logged-home/logged-home.component";



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: LoggedHomeComponent }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
