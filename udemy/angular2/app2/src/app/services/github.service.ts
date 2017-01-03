import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = '';  // your client id
  private client_secret = '';  // your secret

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'bradtraversy';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username) // ?client=_id=this.client_id&client_secret=client_secret
      .map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos')
      .map(res => res.json());
  }

  updateUser(username:string) {
    this.username = username;
  }
}
