# Built-ins

## Symbols
- A symbol is a unique and immutable data type that is often used to identify object properties.
- To create a symbol, write `Symbol()` with an optional string as its description.

```js
const sym1 = Symbol('apple');
console.log(sym1);
// Symbol(apple)
```

### Uniqueness
- Each time a new symbol is created, regardless of the description.
- The description is only used to describe the symbol. It’s not used as part of the symbol itself.

```js
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);
// false
```

### Use case
- It is most often used to uniquely identify properties within an object.

```js
// use string as property keys, and the
// second banana overwrites the first one
const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};

// use symbol as property keys,
// and each symbol is unique
const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
```

## `Set`
- Sets are not indexed-based.
- Items in a `Set` cannot be accessed individually.

```js
// create
const set1 = new Set()
const set2 = new Set(array)

// modify
set1.add(element);    // return the set itself
set2.delete(element); // return true or false

// delete
set1.clear();

// check length
set1.size;

// check element existence
set2.has(element);

// retrieve all values
const iterator1 = set1.keys();   // return a SetIterator
const iterator2 = set1.values(); // return a SetIterator
```

## `WeakSet`
- A normal `Set` with the following differences:
  - `WeakSet` only contains objects.
  - Not iterable and thus cannot be looped over.
  - Does not have a `.clear()` method.
- When an object is deleted, it will also be deleted from the `WeakSet`
 when garbage collection runs.
- `WeakSet` is useful when there needs an efficient, lightweight solution for creating groups of objects.

## `Map`
- Both the keys and the values can be objects, primitive values, or a combination of the two.

```js
const map = new Map();
map.set(key, value); // return the map itself
map.get(key);
map.delete(key);     // return true or false
map.clear();
map.has(key);
```

### Looping through `Map`
- Default `MapIterator`

```js
const iterator1 = map.keys();
iterator1.next();

const iterator2 = map.values();
iterator2.next();
```

- `for...of` loop

```js
for (const [key, value] of map) {
  // ...
}
```

- `forEach` loop

```js
map.forEach((value, key) => fn(value, key));
```

## `WeakMap`
- A normal `Map` with the following differences:
  - Only contain objects as keys.
  - Not iterable.
  - Does not have a `.clear()` method.
- When an object is deleted, the object key will also be deleted from the WeakMap when garbage collection runs.
