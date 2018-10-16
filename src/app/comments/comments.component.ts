import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getComments().subscribe(comments => (this.comments = comments));
  }
}
