import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTopNavComponent } from './custom-top-nav.component';

describe('CustomTopNavComponent', () => {
  let component: CustomTopNavComponent;
  let fixture: ComponentFixture<CustomTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
