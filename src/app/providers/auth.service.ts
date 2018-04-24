import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
// import {AngularFireAuth} from "angularfire2/auth";
// import {Observable} from 'rxjs/Observable';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase';


@Injectable()
export class AuthService {
  private currentUserEmail:string = "";

  constructor(private router:Router) {
    // this.user = afAuth.authState;
  }

  signupUser(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(
        error => {
          // console.log(error)
        }
      )
  }

  loginUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        response =>{
          // console.log("user login!")
          // console.log(response);
          // console.log(response.email);
          this.currentUserEmail = response.email;
          this.router.navigate(['/home']);
        }
      )
      .catch(
        // error => console.log(error)
      )
  }

  getCurrentUserEmail(){
    return this.currentUserEmail;
  }
  logout(){
    firebase.auth().signOut();
    this.router.navigate(['/login']);

  }



  // loginWithGoogle(){
  //   // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //
  // }

}
