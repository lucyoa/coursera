import { Component } from '@angular/core';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [VideoService]
})
export class AppComponent {}
