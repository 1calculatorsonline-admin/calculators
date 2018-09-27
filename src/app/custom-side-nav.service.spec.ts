import { TestBed } from '@angular/core/testing';

import { CustomSideNavService } from './custom-side-nav.service';

describe('CustomSideNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomSideNavService = TestBed.get(CustomSideNavService);
    expect(service).toBeTruthy();
  });
});
