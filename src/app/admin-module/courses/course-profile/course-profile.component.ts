import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../_services/course/course.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from 'src/app/_services/user/user.service';
import { User } from 'src/app/_services/user/user';

@Component({
  selector: 'app-course-profile',
  templateUrl: './course-profile.component.html',
  styleUrls: ['./course-profile.component.css']
})
export class CourseProfileComponent implements OnInit {
  courseForm: FormGroup;
  users: any=[];
  selected: null;

  constructor(
    private actRoute: ActivatedRoute,
    private courseApi: CourseService,
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private userApi: UserService
  )
  {
    var id = this.actRoute.snapshot.paramMap.get('id');

    this.courseApi.GetCourse(id).subscribe(data => {
      this.courseForm = this.fb.group({
        name: [data.name, [Validators.required]],
        details: [data.details, [Validators.required]],
        members: ['', [Validators.required]]
      })

    })

    this.userApi.GetUsers().subscribe( data =>{
      this.users = data;
    })

  }

  ngOnInit() {
    this.courseForm = this.fb.group({
        name: ['', [Validators.required]],
        details: ['', [Validators.required]],
        members: ['', [Validators.required]]
    });
  }

  updateCourseForm(){
    var id = this.actRoute.snapshot.paramMap.get('id');
    if(window.confirm('Are you sure you want to update?')){
      console.log("added member: "+this.selected)
      this.courseApi.EnrolMember(id, this.courseForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/admin/courses'))
      })
    }
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.courseForm.controls[controlName].hasError(errorName);
  }

}