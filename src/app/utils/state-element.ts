import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

export class StateElement {
  public _element$ = new BehaviorSubject<any>(null);

  constructor(item: any) {
    this.element = item;
  }

  public get element$(): Observable<any> {
    return this._element$.asObservable();
  }

  public get element() {
    return this._element$.getValue();
  }

  public set element(item: any) {
    this._element$.next(item);
  }
}
