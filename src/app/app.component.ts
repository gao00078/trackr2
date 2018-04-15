import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      // apiKey: "AIzaSyBIy7UACjyO3dOC99cs2Imat5xEXBxquc8",
      // authDomain: "ngfbauthtest.firebaseapp.com"
      apiKey: "AIzaSyBgCgYKmZsBjx5fGompSfw4yKg_b_iWJEE",
      authDomain: "track1-a4311.firebaseapp.com",
    });
  }
  title = 'app';
}
