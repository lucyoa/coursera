import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideolistComponent } from './components/videolist/videolist.component';

import { YoutubeSafeUrlPipe } from "./components/youtube-safe-url.pipe";

@NgModule({
  declarations: [
    AppComponent,
    VideolistComponent,
    YoutubeSafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
