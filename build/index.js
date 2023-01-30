"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const LinkedList_1 = require("./LinkedList");
// Number Array Collection
const numberCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
console.log('Before : ', numberCollection.data);
numberCollection.sort();
console.log('After : ', numberCollection.data);
// Charactes/String Collection
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
console.log('Before : ', charactersCollection.data);
charactersCollection.sort();
console.log('After : ', charactersCollection.data);
// Linked List Collection
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(1);
linkedList.add(9);
linkedList.add(3);
console.log('Before');
linkedList.print();
linkedList.sort();
console.log('After');
linkedList.print();
