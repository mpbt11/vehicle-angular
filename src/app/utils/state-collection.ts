import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

export class StateCollection {
  public _collection$ = new BehaviorSubject<any[]>([])

  constructor(item: any) {
    this.collection = item
  }

  public get collection$(): Observable<any> {
    return this._collection$.asObservable();
  }

  public get collection() {
    return this._collection$.getValue();
  }

  public set collection(item: any) {
    this._collection$.next(item);
  }

  public getById(item: any) {
    return this.collection.find((value: any) => value.id == item.id);
  }

  public update(item: any): void {
    const object = this.getById(item);
    if (object) {
      const index = this.collection.findIndex(
        (value: any) => value.id === item.id
      );

      return (this.collection[index] = { ...item });
    }
  }

  public delete(item: any) {
    return this.collection.filter((value: any) => value.id != item.id);
  }
}
