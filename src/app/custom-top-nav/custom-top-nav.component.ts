import { Component, OnInit, Input } from '@angular/core';
import { CustomSideNavService } from './../custom-side-nav.service';
import { CustomLeftSideNavComponent } from './../custom-left-side-nav/custom-left-side-nav.component';

@Component({
  selector: 'app-custom-top-nav',
  templateUrl: './custom-top-nav.component.html',
  styleUrls: ['./custom-top-nav.component.css']
})
export class CustomTopNavComponent implements OnInit {

  @Input() sideBar: CustomLeftSideNavComponent;

  constructor(private customSideNavService: CustomSideNavService) {

   }

  ngOnInit() {
  }

  sidenavToggle() {
    this.sideBar.toggle();
  }

}
