import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Adding this
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeyThereComponent } from './feature/hey-there/hey-there.component';

@NgModule({
  declarations: [
    AppComponent,
    HeyThereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Adding this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
