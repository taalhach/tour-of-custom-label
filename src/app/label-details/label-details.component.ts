import { Component, OnInit, Input } from '@angular/core';
import {Label} from '../Label';

@Component({
  selector: 'app-label-details',
  templateUrl: './label-details.component.html',
  styleUrls: ['./label-details.component.css']
})
export class LabelDetailsComponent implements OnInit {
  constructor() { }
  @Input() label: Label;
  ngOnInit(): void {
  }

}
