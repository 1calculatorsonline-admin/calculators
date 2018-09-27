import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLeftSideNavComponent } from './custom-left-side-nav.component';

describe('CustomLeftSideNavComponent', () => {
  let component: CustomLeftSideNavComponent;
  let fixture: ComponentFixture<CustomLeftSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLeftSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLeftSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
