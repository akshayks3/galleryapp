import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: ModalService, private router: Router) { }

  scrolltopbool = false

  itembool = false;

  showbool = false;

  loggedstate = false;
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user === null) {
      this.loggedstate = false
    } else {
      this.router.navigate(['/home'])
      this.loggedstate = true
    }
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {

    this.scrolltopbool = window.pageYOffset === 0 ? false : true
    this.showbool = true
  }

  openModal(id: string) {
    console.log(id)
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  showItems() {
    this.showbool = true
    this.itembool = !this.itembool

  }


}
