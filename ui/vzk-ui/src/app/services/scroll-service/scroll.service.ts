import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollToElementSource = new Subject<string>();
  scrollToElement$ = this.scrollToElementSource.asObservable();

  scrollToElement(elementId: string) {
    this.scrollToElementSource.next(elementId);
  }
}
