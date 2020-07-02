import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  username: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get("name");
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(["/"]);
  }
}
