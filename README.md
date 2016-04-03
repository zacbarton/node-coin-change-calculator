# coin-change-calculator

For a given value calculate the change in coins, e.g. 23 -> [20, 2, 1].

### Install

```
$ npm install coin-change-calculator
```


### Examples

```javascript
const change = ccc(23);
// [20, 2, 1]

const change = ccc(23, [5, 1]);
// [5, 5, 5, 5, 1, 1, 1]
```

### API

ccc(value, [denominations])

Denominations should be expressed as integers and if not supplied default to [100, 50, 20, 10, 5, 2, 1].

### Running Tests
```
$ npm test
```
