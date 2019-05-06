# Classes and objects

## Constructor function
  - Persist data with the `this` keyword.
  - No explicit return value.
  - Can have parameters.
```js
function SoftwareDeveloper(name) {
  this.favoriteLanguage = 'JavaScript';
  this.name = name;
}
```

## Creating a new object
- Use the `new` operator.
```js
let developer = new SoftwareDeveloper('David');
```
- When the `new` operator is not used, no object is created.
  - The function is invoked like a regular function.
  - Since there is no return value, the variable will be assigned to `undefined`.

## The `instanceof` operator
- This operator confirms whether an object is created by a specific constructor function.
- This operator actually tests whether the constructor appears in the prototype chain of an object.
```js
object instanceof ClassName;
// return a boolean

typeof object
// "object"
```
