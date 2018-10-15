import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  subtract(a: number, b: number): number {
    return a - b;
  }

}
