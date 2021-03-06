import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Some Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});


@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }
}
