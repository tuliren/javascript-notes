# Chaining Promises

- Full signature of `then`:

```js
get('example.json')
  .then(resolveFunction, rejectFunction);
```

- The following two chains are equivalent:

```js
get('example.json')
  .then(resolveFunction)
  .catch(rejectFunction);

get('example.json')
  .then(resolveFunction)
  .then(undefined, rejectFunction);
```

- `.catch` is recommended as it is easier to read and write.
- As soon as a promise rejects, the JavaScript engine skips to the next reject function in the chain.
- Difference in the execution order between `.catch` and a second call back in `.then`:

```js
get('example.json')
  // can call both functions
  .then(resolveFunction)
  .catch(rejectFunction);

get('example.json')
  // cannot call both functions
  .then(resolveFunction, rejectFunction);
  // if there is an error in resolveFunction,
  // another catch or .then farther down the
  // chain is needed to catch it
```

- Resolve does not always mean success ([reference](https://jakearchibald.com/2014/resolve-not-opposite-of-reject/)).

## Execute Multiple Promises in Sequence
- In sequence with guaranteed order of completion
  - I.e. the promise starts first will resolve first.

```js
getJson('../data/earth-like-results.json')
  .then(function(response) {
    let sequence = Promise.resolve();

    response.results.forEach(function(url) {
      sequence = sequence
        .then(() => getJson(url))
        .then(createPlanetThumb);
    });
  });
```

- In parallel without guarantee of order of completion

```js
getJson('../data/earth-like-results.json')
  .then(function(response) {
    response.results.forEach(function(url) {
      getJson(url).then(createPlanetThumb);
    });
  });
```

- `Promise.all`
  - Reject immediately if any promise rejects without waiting for the rest of the promises to settle.
  - Resolve after every promises resolve.
  - No order of completion is guaranteed.

```js
Promise.all(arrayOfPromises)
  .then(function(arrayOfValues) {
    // function body
  });
```

```js
getJson('../data/earth-like-results.json')
  .then(function(response) {
    return Promise.all(response.results.map(getJson));
  })
  .then(function(allData) {
    allData.forEach(function (data) {
      createPlanetThumb(data);
    });
  });
```
