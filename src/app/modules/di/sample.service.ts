import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  value = 'foo bar';

  constructor() { }

  getPersons() {
    return [
      {id: 1, name: 'John', contact: 1234},
      {id: 2, name: 'Jack', contact: 5678},
      {id: 3, name: 'Janice', contact: 9012}
    ];
  }

  getPerson(id: number) {
    const persons = this.getPersons();
    return persons.find(person => person.id === id);
  }
}
