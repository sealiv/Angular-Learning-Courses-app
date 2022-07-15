import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  @Input() userName = '';
  btnText = 'logOut';

  logOut() {
    console.log('Logging out')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
