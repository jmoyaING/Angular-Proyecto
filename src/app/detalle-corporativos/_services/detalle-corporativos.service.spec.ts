import { TestBed } from '@angular/core/testing';

import { DetalleCorporativosService } from './detalle-corporativos.service';

describe('DetalleCorporativosService', () => {
  let service: DetalleCorporativosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleCorporativosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
