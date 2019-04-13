import { async, TestBed } from '@angular/core/testing';
import { NgrxExceptionsModule } from './ngrx-exceptions.module';

describe('NgrxExceptionsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgrxExceptionsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgrxExceptionsModule).toBeDefined();
  });
});
