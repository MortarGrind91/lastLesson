import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardUserService } from '../card-user/card-user.service';
import { Post } from './post';
@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cardUserService: CardUserService) {}
  post: Post;
  username: string;
  ngOnInit() {
    this.route.params.subscribe(({ id }) =>
      this.cardUserService.getPost(id).subscribe((post: Post) => {
        this.post = post;
        this.cardUserService.getUser(post.userId).subscribe((user: any) => (this.username = user.name));
      })
    );
  }
}