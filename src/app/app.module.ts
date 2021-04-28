import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumAcceuilComponent } from './forum-acceuil/forum-acceuil.component';
import { ForumRubriqueComponent } from './forum-rubrique/forum-rubrique.component';
import { ForumCategoryComponent } from './forum-category/forum-category.component';
import { ForumDiscussionComponent } from './forum-discussion/forum-discussion.component';
import { IndicztorAcceuilComponent } from './indicztor-acceuil/indicztor-acceuil.component';
import { IndicatorAcceuilComponent } from './indicator-acceuil/indicator-acceuil.component';
import { IndicatorResultComponent } from './indicator-result/indicator-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumAcceuilComponent,
    ForumRubriqueComponent,
    ForumCategoryComponent,
    ForumDiscussionComponent,
    IndicztorAcceuilComponent,
    IndicatorAcceuilComponent,
    IndicatorResultComponent
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
