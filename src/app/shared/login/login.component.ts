import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/services/modal.service';
import { LoginAccounts } from 'src/app/store/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: ModalService, private store: Store<{ loginDetails: any }>, private router: Router) { }
  state = "login"
  passwordType = "password"
  loginDetails = []
  loginForm = new FormGroup({ email: new FormControl(""), password: new FormControl("") })
  signupForm = new FormGroup({ email: new FormControl(""), password: new FormControl(""), username: new FormControl(""), })
  loginerror = false;
  signuperror = [];
  ngOnInit(): void {
    this.store.select("loginDetails").subscribe(data => {
      console.log(data)
      this.loginDetails = data
    })
  }



  login() {
    this.loginerror = false
    let email = this.loginForm.value.email
    let password = this.loginForm.value.password
    let userDetails = this.loginDetails.filter(elem => {
      return elem.userid === email
    })
    console.log(userDetails)
    if (userDetails.length > 0) {
      let loginstate = userDetails[0].password === password ? true : false;
      if (loginstate) {
        let date = new Date()
        let item = JSON.stringify({ user: userDetails[0], date: date })
        localStorage.setItem("user", item);
        console.log("loggedin")
        this.router.navigate(["/home"])
        this.closeModal('login-modal')
      } else {
        this.loginerror = true;
        console.log("Please enter a valid password")
      }
    } else {
      this.loginerror = true;
      console.log("Please enter a valid user name")
    }
  }

  signup() {
    let userid = this.signupForm.value.email;
    let password = this.signupForm.value.password;
    let username = this.signupForm.value.username;
    this.signuperror = [];
    if (userid === "" || userid === null) {
      this.signuperror.push("Enter valid User Id");
    }
    if (username === "" || username === null) {
      this.signuperror.push("Enter a username")
    }
    if (password === "" || password === null) {
      this.signuperror.push("Enter valid password")
    }
    console.log(this.signuperror)
    if (this.signuperror.length > 0) {
      return
    }
    let user = this.loginDetails.filter(elem => {
      return elem.userid === userid;
    })
    console.log(user)
    let temp_array = [...this.loginDetails]
    if (user.length === 0) {
      let user_temp = { userid: userid, password: password, username: username }
      console.log(user_temp)
      temp_array.push(user_temp);
      this.store.dispatch(new LoginAccounts(temp_array));
      let date = new Date()
      localStorage.setItem("user", JSON.stringify({ user: user_temp, date: date }))
      this.router.navigate(["/home"])
      this.closeModal('login-modal')
    } else {
      console.log("User ID already exists");
      this.signuperror.push("User ID already exists")
    }

  }

  closeModal(id: string) {
    console.log(id)
    this.modalService.close(id);
  }

  switchTo(val) {
    this.state = val
    console.log(this.state)
  }

  changePasswordtype(val) {
    this.passwordType = val
  }
}
