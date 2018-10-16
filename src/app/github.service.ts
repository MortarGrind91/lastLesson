import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get('http://localhost:3000/users');
  }

  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }
  getComments() {
    return this.http.get(`http://localhost:3000/comments`);
  }
  addUser(user) {
    return this.http.post(`http://localhost:3000/users`, user);
  }
  removeUser(id) {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
  searchUsers(name) {
    return this.http.get(`http://localhost:3000/users?name=${name}`);
  }
}
