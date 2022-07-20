import { Injectable } from '@angular/core';
import {Course} from "../features/models";

const COURSES: Course[] = [
  {
    id: 1,
    courseTitle: 'Java',
    authors: ['Dave Simmonds', 'Nikolas Le-Mark'],
    duration: 480,//'8:00 hours'
    created: new Date(2018, 1, 1),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: true
  },
  {
    id: 2,
    courseTitle: 'ASP .NET',
    authors: ['Anna Sidorenko', 'Valentina Latina'],
    duration: 1475,//'24:35 hours'
    created: new Date(2020, 11, 11),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: false
  },
  {
    id: 3,
    courseTitle: 'JavaScript',
    authors: ['Vasiliy Dobkin', 'Nicolas Kim'],
    duration: 600,//'10:00 hours'
    created: new Date(2019, 4, 20),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: false
  },
  {
    id: 4,
    courseTitle: 'Angular',
    authors: ['Dave Haisenberg', 'Tony Ja'],
    duration: 150,//'2:30 hours'
    created: new Date(2012, 2, 20),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id cumque ratione commodi minima quas, optio, cum, dolores reprehenderit blanditiis eius aut architecto voluptates. Nobis quam animi quia commodi dolores?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium, corrupti libero atque laboriosam impedit facere dolorem consequatur. Nihil natus officia labore similique! Pariatur sit, suscipit illum inventore neque incidunt.',
    edit: true
  }
];

@Injectable({ providedIn: 'root'})
export class CoursesStoreService {

  constructor() { }

  getAll(): Course[]{
    return COURSES;
  }

  create(course: Course) {
    course.id = COURSES.length + 1;
    COURSES.push(course);
  }
}
