import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

// import {AngularFireModule} from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
// import {AngularFireAuth} from 'angularfire2/auth';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';

import {AuthService} from './providers/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DataService } from './providers/data.service';

const routeConfig: Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component:LoginPageComponent},
  {path: 'home', component:HomePageComponent,
    children:[
      {path:'',component:DeviceListComponent},
      {path:'device/:id', component:DeviceDetailComponent}
    ]
  },
  {path: 'signup', component: SignupComponent}

]


//
// export const firebaseConfig = {
//     apiKey: "AIzaSyBIy7UACjyO3dOC99cs2Imat5xEXBxquc8",
//     authDomain: "ngfbauthtest.firebaseapp.com",
//     databaseURL: "https://ngfbauthtest.firebaseio.com",
//     projectId: "ngfbauthtest",
//     storageBucket: "ngfbauthtest.appspot.com",
//     messagingSenderId: "1027559386705"
// }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    HomePageComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
    // RouterModule.forChild(routeConfig)

    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,

  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }