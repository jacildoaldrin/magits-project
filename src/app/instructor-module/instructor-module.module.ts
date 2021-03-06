import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { RoleGuard } from '../_guards/role-guard.service';
import { AuthGuard } from '../_guards/auth-guard.service';
import { RouterModule } from '@angular/router';
import { instructorRoutes } from './instructor.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../material.module';
import { CourseListComponent } from './course-list/course-list.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MembersComponent } from './members/members.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ProfileComponent, DialogOverviewChangePassword } from './profile/profile.component';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckInMemberComponent } from './home/check-in-member/check-in-member.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrInfoComponent } from './home/check-in-member/qr/qr-info/qr-info.component';
import { QrInfoDialogComponent } from './home/check-in-member/qr/qr-info-dialog/qr-info-dialog.component';
import { FormatsDialogComponent } from './home/check-in-member/qr/formats-dialog/formats-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SessionInfoComponent } from './home/session-info/session-info.component';
import { MatTableModule } from '@angular/material/table';
import { EnrollStudentComponent } from './course-list/enroll-student/enroll-student.component';
import { CourseProfileComponent } from './course-list/course-profile/course-profile.component';
import { ConfirmEnrollComponent } from './course-list/confirm-enroll/confirm-enroll.component';
import { MemberProfileComponent } from './members/member-profile/member-profile.component';
import { CreateAnnouncementComponent } from './announcements/create-announcement/create-announcement.component';
import { AddMemberComponent } from './members/add-member/add-member.component';
import { MyCourseProfComponent } from './my-courses/my-course-prof/my-course-prof.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ManualCheckInComponent } from './home/check-in-member/manual-check-in/manual-check-in.component';
import { SessInfoComponent } from './my-courses/sess-info/sess-info.component';
import { ViewStudentsComponent } from './course-list/view-students/view-students.component';
import { AnnouncementInfoComponent } from './announcements/announcement-info/announcement-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [HomeComponent, LayoutComponent, CourseListComponent, MyCoursesComponent, 
    MembersComponent, AnnouncementsComponent, ProfileComponent, CheckInMemberComponent,
     QrInfoComponent, QrInfoDialogComponent, FormatsDialogComponent, SessionInfoComponent, EnrollStudentComponent, 
     CourseProfileComponent, ConfirmEnrollComponent, MemberProfileComponent, CreateAnnouncementComponent, 
     AddMemberComponent, MyCourseProfComponent, ManualCheckInComponent, SessInfoComponent,DialogOverviewChangePassword, ViewStudentsComponent, AnnouncementInfoComponent],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    CommonModule,
    RouterModule.forChild(instructorRoutes),
    ReactiveFormsModule,
    ZXingScannerModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatTableModule,
    MatSortModule
  ],
  providers:[
    RoleGuard,
    AuthGuard,
    DatePipe
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [SessionInfoComponent,ConfirmEnrollComponent,DialogOverviewChangePassword,AnnouncementInfoComponent]
})
export class InstructorModule { }
