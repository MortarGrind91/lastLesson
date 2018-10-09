import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardUserService {
  constructor(private http: HttpClient) {}

  getUser(username) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
