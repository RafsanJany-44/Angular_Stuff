import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAQkzi4fGlWX0x09x_WrFnj9K3UTjuk-EM",
      authDomain: "fir-anguler-auth.firebaseapp.com",
      projectId: "fir-anguler-auth",
      storageBucket: "fir-anguler-auth.appspot.com",
      messagingSenderId: "749272896585",
      appId: "1:749272896585:web:1637127be4fb3a00041b98"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
