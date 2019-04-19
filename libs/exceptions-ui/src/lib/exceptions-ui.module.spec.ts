import { async, TestBed } from '@angular/core/testing';
import { ExceptionsUiModule } from './exceptions-ui.module';

describe('ExceptionsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExceptionsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExceptionsUiModule).toBeDefined();
  });
});
