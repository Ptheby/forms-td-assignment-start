import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  subscriptions= [
    'basic','advanced','pro'
  ],
  selectedSubscription="Advanced"
  user = {
    email: "",
    password: "",
    subscription: "Advanced",
  };
  submitted = false;

