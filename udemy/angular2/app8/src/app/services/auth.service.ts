import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { options } from '../auth.options';

declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // configure Auth0
  lock = new Auth0Lock('1iHM45Sh1hlXH4M73Yr5S3b8rlsbGz9L', 'marcin.auth0.com', options);

  constructor() {
    this.lock.on("authenticated", (authResult: any) => {
      this.lock.getProfile(authResult.idToken, function(error: any, profile:any) {
        if(error) {
          throw new Error(error);
        }
        // Set Profile
        localStorage.setItem('profile', JSON.stringify(profile));
        // Set Token
        localStorage.setItem('id_token', authResult.idToken);
      });
    });
  }

    public login() {
      this.lock.show();
    }

    public logout() {
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
    }

    public authenticated() {
      return tokenNotExpired();
    }
}
