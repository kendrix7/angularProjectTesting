import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { MathService } from '../services/math.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [MathService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do addition', () => {
    component.param1 = 5;
    component.param2 = 7;

    component.add();

    expect(component.result).toBe(12);
  });

  it('should call mathService to do subtraction', () => {
    const mathSvcInstance = TestBed.get(MathService);

    spyOn(mathSvcInstance, 'subtract').and.returnValue(500);

    component.param1 = 5;
    component.param2 = 7;

    component.subtract();

    expect(mathSvcInstance.subtract).toHaveBeenCalledWith(component.param1, component.param2);
    expect(component.result).toBe(500);
  });

});
