import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @Input() message;
  @Input() isOpen = false;
  @Output() handleYes = new EventEmitter();
  @Output() handleNo = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() { }

  onNo() {
    this.handleNo.emit();
    this.activeModal.close('no');
  }

  onYes() {
    this.handleYes.emit();
    this.activeModal.close('yes');
  }
}
