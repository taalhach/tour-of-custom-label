import { Component, OnInit } from '@angular/core';
import {LabelService} from '../label.service';
import {Label} from '../Label';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  labels: Label[] = [];

  constructor(private heroService: LabelService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getLabels();
  }

  getLabels(): void {
    this.heroService.getLabels()
      .subscribe(labels => this.labels = labels);
  }

}
