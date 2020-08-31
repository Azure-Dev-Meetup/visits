import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Visit } from '../core';

@Injectable({ providedIn: 'root' })
export class VisitService extends EntityCollectionServiceBase<Visit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Visit', serviceElementsFactory);
  }
}
