import { Component, Input, OnInit } from '@angular/core';
import { faCoffee, faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'common-component',
  template: '<p>Common Component</p>',
  styleUrls: ['./shared.style.css']
})
export class CommonComponent implements OnInit{
  constructor(){}
  ngOnInit() {}
}
