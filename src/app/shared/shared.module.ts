import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faChevronDown, faChevronUp, faEye, faEyeSlash, faSignOutAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { HeaderComponent } from "../shared/header/header.component";
import { AppModule } from "../app.module";
import { ModalComponent } from "./modal/modal.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [
    ModalComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars);
    library.addIcons(faFacebook);
    library.addIcons(faInstagram);
    library.addIcons(faTwitter);
    library.addIcons(faYoutube);
    library.addIcons(faTimes);
    library.addIcons(faEye);
    library.addIcons(faEyeSlash);
    library.addIcons(faUser);
    library.addIcons(faChevronDown);
    library.addIcons(faChevronUp);
    library.addIcons(faSignOutAlt);
  }
}
