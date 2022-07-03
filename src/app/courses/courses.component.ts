import { Component, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { CourseComponent } from '../course/course.component';
import { Course } from '../course/course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course_1 = {
    courseTitle: 'Java',
    authors: 'Dave Simmonds, Nikolas Le-Mark',
    duration: '8:00 hours',
    created: '01.02.2018',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: true
  };

  course_2 = {
    courseTitle: 'ASP .NET',
    authors: 'Anna Sidorenko, Valentina Latina',
    duration: '24:35 hours',
    created: '11.12.2020',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: false
  };

  course_3 = {
    courseTitle: 'JavaScript',
    authors: 'Vasiliy Dobkin, Nicolas Kim',
    duration: '10:00 hours',
    created: '20.05.2019',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: false
  };

  course_4 = {
    courseTitle: 'Angular',
    authors: 'Dave Haisenberg, Tony Ja',
    duration: '2:30 hours',
    created: '20.03.2012',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: true
  };
  sources = [this.course_1, this.course_2, this.course_3, this.course_4];
  count = 0;
  
  courses: Course[];
  
  // courses = [this.course_1, this.course_2, this.course_3, this.course_4];

  showCourse(newItem: string) {
    console.log('show course ' + newItem + '...');
  }

  addCourse() {
    if(this.count < 4) {
      this.courses.push(this.sources[this.count++]);
    }
  }

  constructor() { 
    this.courses = [];
  }

  ngOnInit(): void {
  }

}
