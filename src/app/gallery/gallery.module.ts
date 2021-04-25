import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { GalleryComponent } from "./gallery.component";
import { GalleryRoutingModule } from "./gallery.routing.module";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [
    GalleryComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    GalleryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [],
})
export class GalleryModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes)
  }
}
