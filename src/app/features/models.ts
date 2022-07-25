import {User} from "../auth/models";

export interface Course {
  id: number,
  courseTitle: string,
  authors: string[],
  duration: number,
  created: Date,
  text: string,
  edit: boolean
}

export interface UserCourse {
  id: number,
  course: Course[]
}
