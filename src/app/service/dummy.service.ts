import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor() { }

  public getUser() {
    const user = cb => {
      setTimeout(() => {
        cb({name: 'Max'})
      },10000);
    }

    user(usr => {
      console.log(usr.name)
    })
  }

  public myPromise() {
    const getUser = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({name: 'Jack'})
        }, 5000)
      })
    }
    getUser().then(user => {
      console.log(user)
    })
  }
}
