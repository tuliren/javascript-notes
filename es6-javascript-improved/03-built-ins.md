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
