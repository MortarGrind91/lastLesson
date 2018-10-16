import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { CardUserComponent } from './card-user/card-user.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CardPostComponent } from './card-post/card-post.component';
import { MatCardModule } from '@angular/material/card';
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { MatInputModule } from '@angular/material/input';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: CardUserComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: CardPostComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/:id', component: CommentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardUserComponent,
    PostsComponent,
    HeaderComponent,
    UsersComponent,
    CardPostComponent,
    CommentComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
