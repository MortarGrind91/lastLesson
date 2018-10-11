import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getPosts().subscribe(posts => (this.posts = posts));
  }
}
