import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardUserService } from './card-user.service';
import { User } from './user';
@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cardUserService: CardUserService) {}
  user: any;
  ngOnInit() {
    this.route.params.subscribe(({ id }) =>
      this.cardUserService.getUser(id).subscribe((user: User) => (this.user = user))
    );
  }
}
