import { ParentChild } from '../../interface/parent-child';

export const PARENTCHILDMOCK: ParentChild[] = [
  {id: 1, age: 55, gender: 'Male', name: 'John', children: [
    {id : 10, name: 'Patrick', age: 22, gender: 'Male', children: []},
    {id : 11, name: 'Joyce', age: 23, gender: 'Female', children: []}
  ]},
  {id: 2, age: 45, gender: 'Female', name: 'Marie', children: [
    {id : 20, name: 'Joana', age: 11, gender: 'Female', children: []},
    {id : 21, name: 'Hanna', age: 12, gender: 'Female', children: []}
  ]},
];
