import { Component, Input } from '@angular/core';
import { Course } from "../model/course";

@Component({
  selector: 'course-card',
  standalone : false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

    @Input({required: true})

    course:Course;

  onCourseViewed(){
    console.log("Course viewed: ", this.course);
  }

}
