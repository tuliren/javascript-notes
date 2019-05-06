# Objects in Depth

## Creating objects
```js
// Using literal notation:
const myObject = {};

// Using the Object() constructor function:
const myObject = new Object();
```

- Both methods return an object without properties.
- The `Object()` constructor function is a bit slower.
- The recommended way to create new objects in JavaScript is to use literal notation.

## Modifying properties
- Data within objects are *mutable*.

## Addig properties
- Properties can be added to objects simply by specifying the property name, then giving it a value

## Removing properties
```js
// returns true if deletion is successful
delete object.property;
delete object.function;
```

## Passing primitives
- Primitives are immutable.
- Any changes made to an argument inside a function effectively creates a copy local to that function, and does not affect the primitive outside of that function

```js
function changeToEight(n) {
  // whatever n was, it is now 8,
  // but only in this function!
  n = 8;
}

let n = 7;
changeToEight(n);
console.log(n);
// 7
```

## Passing objects
- Objects are *mutable*.
- When an object is passed into a function, JavaScript makes a copy of the reference to that object.
- Both the original reference and the copied references point to the same object.

```js
function setToBlue(object) {
  object.favoriteColor = 'blue';
}

let originalObject = {
  favoriteColor: 'red'
};
setToBlue(originalObject);
originalObject.favoriteColor;
// 'blue'
```

## Comparing objects
- When comparing two objects with `===`, the expression will only return `true` when comparing two references to exactly the same object.

## Functions vs. methods
- Methods are functionas inside an object.
- Methods are special properties whose values are functions.
