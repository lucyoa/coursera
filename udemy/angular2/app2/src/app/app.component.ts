import { Component } from '@angular/core';
import { GithubService } from './services/github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GithubService]
})

export class AppComponent {
  title = 'app works!';
}
