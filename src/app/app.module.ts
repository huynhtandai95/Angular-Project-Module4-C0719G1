import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { PostCommentComponent } from './components/post/post-comment/post-comment.component';

// import { LoginAdminComponent } from './components/login-admin/login-admin.component';
// import { HelpComponent } from './components/help/help.component';
// import { EditUsersComponent } from './components/edit-users/edit-users.component';
// import { ChangePasswordComponent } from './components/change-password/change-password.component';


import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminUserDetailComponent } from './components/admin/admin-user-detail/admin-user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCommentComponent,

    // LoginAdminComponent,
    // // HelpComponent,
    // EditUsersComponent,
    // ChangePasswordComponent

    AdminHomeComponent,
    AdminUserDetailComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
