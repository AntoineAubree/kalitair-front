import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumAcceuilComponent } from './forum/forum-acceuil/forum-acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumAcceuilComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
