import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListHeaderComponent } from './list-header.component';
import { CardContentComponent } from './card-content.component';
import { ButtonFooterComponent } from './button-footer.component';
import { ModalComponent } from './modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const components = [
  ButtonFooterComponent,
  CardContentComponent,
  ListHeaderComponent,
  ModalComponent
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [components],
  exports: [components]
})
export class SharedModule { }
