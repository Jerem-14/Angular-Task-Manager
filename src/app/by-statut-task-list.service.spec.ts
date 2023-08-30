import { TestBed } from '@angular/core/testing';

import { ByStatutTaskListService } from './by-statut-task-list.service';

describe('ByStatutTaskListService', () => {
  let service: ByStatutTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByStatutTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
