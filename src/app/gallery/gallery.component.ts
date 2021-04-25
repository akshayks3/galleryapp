import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router, private modalService: ModalService) { }
  loggedstate = false
  movieList = [{ src: "../../assets/images/spiderman.jpg", name: "Spiderman" }, { src: "../../assets/images/dark.jpg", name: "Dark" }, { src: "../../assets/images/iron-man.jpg", name: "Iron Man" }, { src: "../../assets/images/avengers2.jpg", name: "Avengers" }, { src: "../../assets/images/rocky_new.jpg", name: "Rocky" }, { src: "../../assets/images/dunkirk1.jpg", name: "Dunkirk" }, { src: "../../assets/images/mission.jpg", name: "Mission Impossible" }, { src: "../../assets/images/lifeisbeautiful_new.jpg", name: "Life is beautiful" }, { src: "../../assets/images/phantom_thread.jpg", name: "Phantom Thread" }, { src: "../../assets/images/jojo_new.jpg", name: "Jojo Rabbit" }]
  selected = ""
  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("user"))
    if (user === null) {
      this.loggedstate = false
      this.router.navigate([''])
    } else {
      this.loggedstate = true
    }
  }

  openModal(id: string, item) {
    this.modalService.open(id);
    this.selected = item
  }

  closeimgModal(id: string) {
    console.log(id)
    this.modalService.close(id);
  }

}
