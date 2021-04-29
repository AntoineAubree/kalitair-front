import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumSectionComponent } from './forum-section/forum-section.component';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ForumDiscussionComponent } from './forum/forum-discussion/forum-discussion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { DeleteSectionComponent } from './delete-section/delete-section.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumDiscussionComponent,
    ForumSectionComponent,
    ForumHomeComponent,
    EditSectionComponent,
    DeleteSectionComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
