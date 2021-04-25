import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: ModalService, private router: Router) { }
  loggedstate: boolean;
  userdetails: any;
  currentroute = ""
  ngOnInit(): void {
    console.log(this.router.url)
    let route = this.router.url
    if (route === "" || route === "/" || route === "/home") {
      this.currentroute = "home"
    } else if (route === "/about") {
      this.currentroute = "about"
    } else if (route === "/gallery") {
      this.currentroute = "gallery"
    }
    console.log(this.currentroute)
    let a = JSON.parse(localStorage.getItem("user"))
    console.log(a)
    if (a === null) {
      this.loggedstate = false
    } else {
      this.loggedstate = true
      this.userdetails = a.user
      console.log(this.userdetails.username)
    }
  }
  itembool = false;
  showbool = false;
  logdown = false;
  showItems() {
    this.showbool = true
    this.itembool = !this.itembool

  }

  openModal(id: string) {
    this.itembool = false;
    this.modalService.open(id);
  }

  navigateTo(path) {
    console.log(path)
    if (path === "about") {
      this.router.navigate(["/about"])
    } else if (path === "home") {
      this.router.navigate([""])
    } else if (path === "gallery") {
      this.router.navigate(["/gallery"])
    }
  }

  scrolltopbool = false
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {

    this.scrolltopbool = window.pageYOffset === 0 ? false : true
    this.showbool = true
  }

  showLog() {
    this.logdown = !this.logdown
  }

  logout() {
    localStorage.removeItem("user")
    console.log("loggedout")
    this.router.navigate([""])
  }




}
