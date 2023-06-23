/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactService } from './contact.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Contact', () => {
  let httpservice: ContactService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
