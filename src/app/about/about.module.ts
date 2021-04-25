import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCalculator, faInfo, faMinus, faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { AboutComponent } from "./about.component";
import { AboutRoutingModule } from "./about.routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AboutComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [],
})
export class AboutModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlusSquare);
    library.addIcons(faCalculator);
    library.addIcons(faInfo);
    library.addIcons(faPlus);
    library.addIcons(faMinus);
  }
}
