import { Injectable } from '@angular/core';
import {Label} from './Label';
import {LABELS} from './mock-labels';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor() { }
  getLabels(): Observable<Label[]> {
    return of(LABELS);
  }
}
