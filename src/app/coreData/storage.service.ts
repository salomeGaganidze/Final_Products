import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _Mystorage = localStorage;
  constructor() {}

    getItem(result: string ): any | undefined {
      return this._Mystorage.getItem(result) || undefined
    }

  setItem(key: string, value: any) {
    this._Mystorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    this._Mystorage.removeItem(key);
  }
  itemExists(key: string): boolean {
    return !!this._Mystorage.getItem(key);
  }
}
