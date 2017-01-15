import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {
  constructor(private _http: Http) {

  }

  getVideos(query) {
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&maxResults=6&type=video&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM';

    return this._http.get(url)
      .map(res => res.json());
  }
}
