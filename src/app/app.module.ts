import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ForumModule } from './forum/forum.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IndicatorModule } from './indicator/indicator.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    UserModule,
    IndicatorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ForumModule,
    AdminModule,
    NgbModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
