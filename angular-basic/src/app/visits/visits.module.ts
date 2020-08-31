import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VisitDetailComponent } from './visit-detail.component';
import { VisitListComponent } from './visit-list.component';
import { VisitsComponent } from './visits.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: VisitsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    RouterModule,
    VisitsComponent
  ],
  declarations: [
    VisitsComponent,
    VisitListComponent,
    VisitDetailComponent,
  ],
})

export class VisitsModule {}
