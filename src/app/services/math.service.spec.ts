import { TestBed, inject } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService]
    });
  });

  it('should be created', inject([MathService], (service: MathService) => {
    expect(service).toBeTruthy();
  }));

  it('should subtract correctly', (a: number, b: number) => {
    a = 9;
    b = 6;

    service.subtract();

    expect(service.return).toBe(3);
  });
});
