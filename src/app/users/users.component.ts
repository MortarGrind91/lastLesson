import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private githubService: GithubService) {}
  users: any;

  ngOnInit() {
    this.githubService.getConfig().subscribe(data => (this.users = data));
  }
}
