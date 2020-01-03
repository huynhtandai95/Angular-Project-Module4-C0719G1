import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';


import { PostComponent } from './components/post/post/post.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostAddComponent } from './components/post/post-add/post-add.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { MaterialModule } from './material/material.module';
import { LoginUsersComponent } from './components/login/login-users/login-users.component';
import { RegisterComponent } from './components/Register/register.component';
import { PostConfirmComponent } from './components/post/post-confirm/post-confirm.component';
import { PostSuccessComponent } from './components/post/post-success/post-success.component';
import { AdminUserListComponent } from './components/admin/admin-user-list/admin-user-list.component';
import { AdminLockUserComponent } from './components/admin/admin-lock-user/admin-lock-user.component';
import { AdminUnlockUserComponent } from './components/admin/admin-unlock-user/admin-unlock-user.component';

import { HelpComponent } from "../app/components/help/help.component";
import { EditUsersComponent } from "../app/components/edit-users/edit-users.component";
import { ChangePasswordComponent } from "../app/components/change-password/change-password.component";
import { LoginAdminComponent } from "../app/components/login-admin/login-admin.component";





import { DemoButtonSearchPostAdvancedComponent } from './components/post/demo-button-search-post-advanced/demo-button-search-post-advanced.component';
import { DialogSearchPostAdvancedComponent } from './components/post/dialog-search-post-advanced/dialog-search-post-advanced.component';
import { SearchPostByTitleComponent } from './components/post/search-post-by-title/search-post-by-title.component';
import { SearchPostByFengshuiComponent } from './components/post/search-post-by-fengshui/search-post-by-fengshui.component';
import { SearchPostGeneralComponent } from './components/post/search-post-general/search-post-general.component';
import { SuccessRegisterComponent } from './components/Register/success-register/success-register.component';

import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminUserDetailComponent } from './components/admin/admin-user-detail/admin-user-detail.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { PostPendingApprovalComponent } from './components/admin/admin-post-list/post-pending-approval/post-pending-approval.component';
import { PostApprovedComponent } from './components/admin/admin-post-list/post-approved/post-approved.component';
import { PostDetailsApprovedComponent } from './components/admin/admin-post-details/post-details-approved/post-details-approved.component';
import { PostDetailsPendingApprovalComponent } from './components/admin/admin-post-details/post-details-pending-approval/post-details-pending-approval.component';
import { MainComponent } from './components/main/main.component';
import { SuccessComfirmMailComponent } from './components/Register/success-comfirm-mail/success-comfirm-mail.component';

import { GuardsUserGuard } from "./services/Guards/guards-user.guard";
import { HelpSuccessComponent } from './components/help/help-success/help-success.component';


import { RemovePostMatDialogComponent } from './components/admin/admin-post-details/remove-post-mat-dialog/remove-post-mat-dialog.component';
import { DeletePostMatDialogComponent } from './components/admin/admin-post-details/delete-post-mat-dialog/delete-post-mat-dialog.component';
import { DialogRemoveComponent } from './components/admin/admin-post-list/dialog-remove/dialog-remove.component';
import { PostEditSuccesComponent } from './components/post/post-edit-succes/post-edit-succes.component';


import { AdminSettingComponent } from './components/admin/admin-setting/admin-setting.component';
import { AdminSettingDialogConfirmDeleteCategoryComponent } from './components/admin/admin-setting-dialog-confirm-delete-category/admin-setting-dialog-confirm-delete-category.component';
import { AdminSettingDialogEditCategoryComponent } from './components/admin/admin-setting-dialog-edit-category/admin-setting-dialog-edit-category.component';
import { AdminSettingDialogConfirmDeleteRegionComponent } from './components/admin/admin-setting-dialog-confirm-delete-region/admin-setting-dialog-confirm-delete-region.component';
import { AdminSettingDialogEditRegionComponent } from './components/admin/admin-setting-dialog-edit-region/admin-setting-dialog-edit-region.component';
import { AdminSettingDialogConfirmDeletePostOfTypeComponent } from './components/admin/admin-setting-dialog-confirm-delete-post-of-type/admin-setting-dialog-confirm-delete-post-of-type.component';
import { AdminSettingDialogEditPostOfTypeComponent } from './components/admin/admin-setting-dialog-edit-post-of-type/admin-setting-dialog-edit-post-of-type.component';

import { EmployeeDetailComponent } from './components/admin/employees/employee-detail/employee-detail.component';
import { AuthorizationAdminComponent } from './components/admin/authorization-admin/authorization-admin.component';
import { DeleteEmployeeComponent } from './components/admin/delete-employee/delete-employee.component';
import { LockEmployeeComponent } from './components/admin/lock-employee/lock-employee.component';
import { UnlockEmployeeComponent } from './components/admin/unlock-employee/unlock-employee.component';

import { AdminStatisticViewComponent } from './components/admin/admin-statistic-view/admin-statistic-view.component';
import { AdminMostViewPostComponent } from './components/admin/admin-most-view-post/admin-most-view-post.component';
import { Level1AccountGuardGuard } from './services/Guards/level1-account-guard.guard';
import { Level2AccountGuard } from './services/Guards/level2-account.guard';
import { Level4AccountGuard } from './services/Guards/level4-account.guard';
import { AdminGuard } from './services/Guards/admin.guard';



const appRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'post/add', component: PostAddComponent,canActivate:[GuardsUserGuard] },
      { path: 'post/list', component: PostListComponent },
      { path: 'successConfirmMail', component: SuccessComfirmMailComponent },

      { path: 'detailpost/:id', component: PostDetailComponent },
      { path: 'post', component: PostComponent },
      { path: 'commentpost', component: PostDetailComponent },
      { path: 'login', component: LoginUsersComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'successRegister', component: SuccessRegisterComponent },
      { path: 'post/btnSearchPostAdvanced', component: DemoButtonSearchPostAdvancedComponent },

      { path: 'help', component: HelpComponent },
      { path: 'editusers', component: EditUsersComponent },
      { path: 'changepassword', component: ChangePasswordComponent },
      { path: 'loginAdmin', component: LoginAdminComponent },
      { path: 'user/profile', component: UserProfileComponent,canActivate:[GuardsUserGuard] },
      { path: 'user/profile/post/:id/edit', component: PostEditComponent },


      { path: 'help', component: HelpComponent },
      { path: 'helpSucces', component: HelpSuccessComponent },
      { path: 'editusers', component: EditUsersComponent },
      { path: 'changepassword', component: ChangePasswordComponent },
      { path: 'loginAdmin', component: LoginAdminComponent },
      { path: 'user/profile', component: UserProfileComponent },
      { path: 'user/profile/post/:id/edit', component: PostEditComponent },
    ]},
      {
        path: 'admin', component: AdminHomeComponent, canActivate:[AdminGuard],
        children: [
          { path: 'user-list', component: AdminUserListComponent,canActivate:[Level2AccountGuard]  },
          { path: 'user-detail/:id', component: AdminUserDetailComponent,canActivate:[Level2AccountGuard]  },
          { path: 'post-pending-approval', component: PostPendingApprovalComponent,canActivate:[Level4AccountGuard]},
          { path: 'post-approved', component: PostApprovedComponent,canActivate:[Level4AccountGuard] },
          { path: 'post-details-approved/:id', component: PostDetailsApprovedComponent,canActivate:[Level4AccountGuard] },
          { path: 'post-details-pendding-approval/:id', component: PostDetailsPendingApprovalComponent,canActivate:[Level4AccountGuard] },

          { path: 'employee-detail', component: EmployeeDetailComponent,canActivate:[Level1AccountGuardGuard]},
          { path: 'authorization-admin', component: AuthorizationAdminComponent,canActivate:[Level1AccountGuardGuard]},

          { path: 'post-view', component: AdminStatisticViewComponent },
          { path: 'post-topview', component: AdminMostViewPostComponent },
          {path:'admin-setting',component:AdminSettingComponent}

        ]
      },
      { path: 'searchPostGeneral', component: SearchPostGeneralComponent, outlet: 'searchPostAdvanced' },
      { path: 'searchByTitile', component: SearchPostByTitleComponent, outlet: 'searchPostAdvanced' },
      { path: 'searchByFengshui', component: SearchPostByFengshuiComponent, outlet: 'searchPostAdvanced' },
      { path: '**', redirectTo: 'post/list', pathMatch: 'full' },

      // { path: '', redirectTo: 'post/list'},
]

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    LoginUsersComponent,
    RegisterComponent,
    PostConfirmComponent,
    DemoButtonSearchPostAdvancedComponent,
    DialogSearchPostAdvancedComponent,
    SearchPostByTitleComponent,
    SearchPostByFengshuiComponent,
    SearchPostGeneralComponent,
    PostSuccessComponent,
    SuccessRegisterComponent,

    AdminUserListComponent,
    AdminLockUserComponent,
    AdminUnlockUserComponent,

    UserProfileComponent,
    PostPendingApprovalComponent,
    PostApprovedComponent,
    PostDetailsApprovedComponent,
    PostDetailsPendingApprovalComponent,
    HelpComponent,
    EditUsersComponent,
    ChangePasswordComponent,

    MainComponent,
    SuccessComfirmMailComponent,


    LoginAdminComponent,
    HelpSuccessComponent,

    RemovePostMatDialogComponent,
    DeletePostMatDialogComponent,
    DialogRemoveComponent,

    MainComponent,

    PostEditSuccesComponent,

    AdminSettingComponent,
    AdminSettingDialogConfirmDeleteCategoryComponent,
    AdminSettingDialogEditCategoryComponent,
    AdminSettingDialogConfirmDeleteRegionComponent,
    AdminSettingDialogEditRegionComponent,
    AdminSettingDialogConfirmDeletePostOfTypeComponent,
    AdminSettingDialogEditPostOfTypeComponent,


    EmployeeDetailComponent,


    AuthorizationAdminComponent,


    DeleteEmployeeComponent,


    LockEmployeeComponent,


    UnlockEmployeeComponent,

    AdminStatisticViewComponent,

    AdminMostViewPostComponent

  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(appRoutes)
  ],

  entryComponents: [
    PostConfirmComponent,
    DialogSearchPostAdvancedComponent,
    AdminLockUserComponent,
    AdminUnlockUserComponent,
    RemovePostMatDialogComponent,
    DeletePostMatDialogComponent,
    DialogRemoveComponent,
    PostSuccessComponent,
    PostEditSuccesComponent,
    AdminSettingDialogConfirmDeleteCategoryComponent,
    AdminSettingDialogEditCategoryComponent,
    AdminSettingDialogConfirmDeleteRegionComponent,
    AdminSettingDialogEditRegionComponent,
    AdminSettingDialogConfirmDeletePostOfTypeComponent,
    AdminSettingDialogEditPostOfTypeComponent,
    DeleteEmployeeComponent,
    LockEmployeeComponent,
    UnlockEmployeeComponent
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
