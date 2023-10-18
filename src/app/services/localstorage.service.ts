import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  storageKey = 'cart_items';

  constructor() {}

  loadItemsFromStorage() {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  saveItemsToStorage(items: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  clearItemsFromStorage() {
    localStorage.removeItem(this.storageKey);
  }
}

