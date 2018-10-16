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
  newUser: any = {
    name: ''
  };
  onKey(event: any) {
    this.newUser.name = event.target.value;
    this.githubService.searchUsers(this.newUser.name).subscribe(users => (this.users = users));
  }
  onSend() {
    this.githubService.addUser(this.newUser).subscribe(users => (this.users = users));
  }
  onRemove(id) {
    this.githubService.removeUser(id).subscribe(users => (this.users = users));
  }
  onSearch() {
    this.githubService.searchUsers(this.newUser.name).subscribe(users => (this.users = users));
  }

  ngOnInit() {
    this.githubService.getConfig().subscribe(data => (this.users = data));
  }
}
