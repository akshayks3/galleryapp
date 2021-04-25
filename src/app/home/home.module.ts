import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";
import { LoggedHomeComponent } from "./logged-home/logged-home.component";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
  declarations: [
    HomeComponent,
    LoggedHomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [],
})
export class HomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
  }
}
