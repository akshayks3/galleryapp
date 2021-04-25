import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-home',
  templateUrl: './logged-home.component.html',
  styleUrls: ['./logged-home.component.scss']
})
export class LoggedHomeComponent implements OnInit {

  constructor(private router: Router) { }
  loggedstate = false;
  movieList = [
    { src: "../../../assets/images/lifeisbeautiful.jpg", name: "Life Is Beautiful", genre: "Comedy" },
    { src: "../../../assets/images/phantom.jpg", name: "Phantom Thread", genre: "Drama" },
    { src: "../../../assets/images/jojo.jpg", name: "Jojo Rabit", genre: "Comedy" },
    { src: "../../../assets/images/rocky.jpg", name: "Rocky", genre: "Action" },
    { src: "../../../assets/images/leftfoot.jpg", name: "My Left Foot", genre: "Drama" },
    { src: "../../../assets/images/benjamin.jpg", name: "The Curious Case of Benjamin Button", genre: "Romance" },
    { src: "../../../assets/images/dunkrik.jpg", name: "Dunkirk", genre: "Drama" },
    { src: "../../../assets/images/joker.jpg", name: "Joker", genre: "Drama" },
  ]


  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user === null) {
      this.loggedstate = false
      this.router.navigate([''])
    } else {
      this.loggedstate = true
    }
  }

  explore() {
    this.router.navigate(['/gallery'])
  }

}
