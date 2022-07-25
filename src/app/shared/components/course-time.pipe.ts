import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'courseTime'})
export class CourseTimePipe implements PipeTransform {
  transform(duration: number): string {
    let hours = (duration - duration % 60) / 60;
    let minutes = duration % 60;
    let minutesString = minutes == 0 ? '00' : minutes < 10 ? '0' + minutes : '' + minutes;
    let hoursString = hours == 0 ? '00' : hours < 10 ? '0' + hours : '' + hours;
    return hoursString + ':' + minutesString + ' hours';
  }
}
