import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSideMenu = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
