import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumSectionComponent } from './forum/forum-section/forum-section.component';
import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { MessageComponent } from './forum/message/message.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditSectionComponent } from './forum/section/edit-section/edit-section.component';
import { DeleteSectionComponent } from './forum/section/delete-section/delete-section.component';
import { FormsModule } from '@angular/forms';
import { CreateSectionComponent } from './forum/section/create-section/create-section.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ForumSectionComponent,
    ForumHomeComponent,
    EditSectionComponent,
    DeleteSectionComponent,
    CreateSectionComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
