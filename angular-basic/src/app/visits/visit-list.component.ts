import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { Visit } from '../core';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitListComponent implements OnInit {
  @Input() visits: Visit[];
  @Output() deleted = new EventEmitter<Visit>();
  @Output() selected = new EventEmitter<Visit>();

  ngOnInit() {

  }

  trackByVisit(index: number, visit: Visit): number {
    return visit.id;
  }

  selectVisit(visit: Visit) {
    this.selected.emit(visit);
  }

  deleteVisit(visit: Visit) {
    this.deleted.emit(visit);
  }
}
