import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../core';
import { VisitService } from './visit.service';
import { NgbDateStruct, NgbDatepicker, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../shared/modal.component';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html'
})
export class VisitsComponent implements OnInit {
  selected: Visit;
  visits$: Observable<Visit[]>;
  message = '?';
  visitToDelete: Visit;
  showModal = false;


  constructor(
    private visitService: VisitService,
    private readonly modalservice: NgbModal
  ) {
    this.visits$ = visitService.entities$;
  }

  ngOnInit() {
    this.getVisits();
  }

  cancel() {
  }

  send() {
  }


  add(visit: Visit) {
    console.log('visit added', visit);
    this.visitService.add(visit);
  }

  askToDelete(visit: Visit) {
    const deleteDialogRef = this.modalservice.open(ModalComponent, { size: 'lg', centered: true });
    this.visitToDelete = visit;
    this.showModal = true;
    if (this.visitToDelete.name) {
      this.message = `Would you like to delete ${this.visitToDelete.name}?`;
    }
    deleteDialogRef.result.then((res) => {
      if (res === 'yes') {
        this.deleteVisit();
      }
    });
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteVisit() {
    if (this.visitToDelete) {
      this.visitService
        .delete(this.visitToDelete.id)
        .subscribe(() => (this.visitToDelete = null));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getVisits() {
    this.visitService.getAll().subscribe(element => {
      return element;
    });
    this.clear();

  }

  save(visit: Visit) {
    if (this.selected && this.selected.name) {
      this.update(visit);
    } else {
      this.add(visit);
    }
  }

  select(visit: Visit) {
    this.selected = visit;
  }

  update(visit: Visit) {
    this.visitService.update(visit);
  }
}
