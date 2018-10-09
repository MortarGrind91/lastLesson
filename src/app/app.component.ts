import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'last-app';
  constructor(private githubService: GithubService) {}
  users: any;
  ngOnInit() {
    this.githubService.getConfig().subscribe(data => (this.users = data));
  }
}
