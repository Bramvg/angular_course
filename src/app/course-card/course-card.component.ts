import {Component, Input, Output} from '@angular/core';
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'course-card',
  standalone : false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({required: true})
  course: Course;

  @Input({required: true})
  index: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Card component - course viewed: ");
    this.courseEmitter.emit(this.course);
  }


  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }
}
