import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';

import { Visit } from '../core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitDetailComponent implements OnChanges {
  @Input() visit: Visit;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Visit>();

  addMode = false;
  editingVisit: Visit;

  model: NgbDateStruct;
  @ViewChild('date') date: any;

  ngOnChanges(changes: SimpleChanges) {
    if (this.visit && this.visit.id) {
      this.editingVisit = { ...this.visit };
      this.addMode = false;
    } else {

      this.editingVisit = {
        id: undefined,
        name: '',
        phone: '',
        street: '',
        plz: '',
        city: '',
        email: '',
        date: '',
        arrivalTime: '',
        leavingTime: '',
        tableNumber: '',
      };
      this.addMode = true;
    }
  }

  clear() {
    this.editingVisit = {
      id: undefined,
      name: '',
      phone: '',
      street: '',
      plz: '',
      city: '',
      email: '',
      date: '',
      arrivalTime: '',
      leavingTime: '',
      tableNumber: '',
    };
  }

  saveVisit() {
    this.editingVisit.date = new Date(
      this.editingVisit.date.year, this.editingVisit.date.month - 1, this.editingVisit.date.day
    ).toLocaleDateString();
      console.log('save visit', this.editingVisit);
    this.save.emit(this.editingVisit);
    this.clear();
  }
}
