import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardUserService {
  constructor(private http: HttpClient) {}

  getUser(id) {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }
  getPost(id) {
    return this.http.get(`http://localhost:3000/posts/${id}`);
  }
}
