import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [
    { text: 'Home', link :'home'} ,
    { text: 'Profile', link :'profile'} ,
    { text: 'About', link :'about'} ,
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
