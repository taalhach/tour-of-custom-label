import { Component, OnInit } from '@angular/core';
import {Label} from '../Label';
import {LabelService} from '../label.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {
  labels: Label[];
  selectedLabel: Label;
  onSelect(label: Label): void{
    this.selectedLabel = label;
  }
  constructor(private labelService: LabelService) { }
  getLabels(): void{
    this.labelService.getLabels().subscribe(labels => this.labels = labels);
  }
  ngOnInit(): void {
    this.getLabels();
  }

}
