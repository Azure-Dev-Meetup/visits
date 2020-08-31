import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-footer',
  templateUrl: './button-footer.component.html'
})
export class ButtonFooterComponent implements OnInit {
  @Input() label;
  @Input() className;
  @Input() iconClasses;
  @Input() item;
  @Input() dataId;
  @Input() disabled;

  @Output() clicked = new EventEmitter<any>();

  ngOnInit() {}

  handleClick() {
    this.clicked.emit(this.item);
  }
}
