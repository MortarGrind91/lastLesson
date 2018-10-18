import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardUserService } from './card-user.service';
import { User } from './user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cardUserService: CardUserService,
    private githubService: GithubService
  ) {}
  user: any;
  posts: any;
  newPost = '';

  onKey(event: any) {
    this.newPost = event.target.value;
  }
  onAdd() {
    this.githubService.addPost(this.newPost, this.user.id).subscribe(posts => (this.posts = posts));
  }

  // onRemovePost(id) {
  //   this.githubService.removePost(id).subscribe(posts => (this.posts = posts));
  // }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.cardUserService.getUser(id).subscribe((user: User) => (this.user = user));
      this.githubService.getPostsForUser(id).subscribe(posts => (this.posts = posts));
    });
  }
}
