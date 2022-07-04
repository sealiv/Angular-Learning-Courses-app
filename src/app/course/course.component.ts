import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faGraduationCap, faHammer, faTrash, faChevronRight } from '../shared/shared.module';

export interface Course {
  courseTitle: string,
    authors: string[],
    duration: number,
    created: Date,
    text: string,
    edit: boolean
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {



  @Input() editable = false;

  @Input() course = {
    courseTitle: '',
    authors: [''],
    duration:  0,
    created: new Date(),
    text: '',
    edit: false
  };

  @Output() newEvent = new EventEmitter<string>();

  addNewShowIvent(value: string) {
    if (value.length) {
      console.log('click on ' + value);
      this.newEvent.emit(value);
    }
  }

  @Output() newItemEvent3 = new EventEmitter<string>();

  addNewItem(value: string) {
    if (value.length) {
      console.log('click on ' + value);
      this.newItemEvent3.emit(value);
    }
  }

  ngOnInit(): void {
  }

  courseIcon = faGraduationCap;
  editIcon = faHammer;
  deleteIcon = faTrash;
  chevronIcon = faChevronRight;
}