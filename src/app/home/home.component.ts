import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Web Developer.'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }

}
