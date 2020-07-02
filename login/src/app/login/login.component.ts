import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

import { Router } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}
  username: string;

  ngOnInit() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-zA-Z]*"),
        ]),
        pass: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*)(+=._-]).{8,15}$"
          ),
        ]),
      }),
    });
  }
  onSubmit() {
    this.username = this.loginForm.value.userData.username;
    this.loginForm.reset();
    this.authService.login();
    this.router.navigate(["/home", this.username]);
  }

  toggleEye() {
    $(".toggleEye").toggleClass("fa-eye-slash fa-eye");
    var input = $("#password-field");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  }
}
