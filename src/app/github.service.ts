import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  configUrl = 'https://api.github.com/users?since=255';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
