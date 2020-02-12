import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'ma-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @HostBinding('class') className = 'footer d-block fixed-bottom bg-light';

  constructor() {
  }

  ngOnInit(): void {
  }

}
