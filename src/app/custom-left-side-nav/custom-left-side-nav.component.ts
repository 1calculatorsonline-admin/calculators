import { Component, OnInit } from '@angular/core';
import { CustomSideNavService } from './../custom-side-nav.service';

@Component({
  selector: 'app-custom-left-side-nav',
  templateUrl: './custom-left-side-nav.component.html',
  styleUrls: ['./custom-left-side-nav.component.css']
})
export class CustomLeftSideNavComponent implements OnInit {

  constructor(private customSideNavService: CustomSideNavService) { }
  opened: boolean;

  ngOnInit() {

  }

}
