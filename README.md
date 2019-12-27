# JMessenger

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->
[![NPM install][npm-install-image]][npm-install-url]

| `JMessenger` is no longer maintained. Please, use [@mobilabs/messenger](https://www.npmjs.com/package/@mobilabs/messenger) now. |
| --- |

`JMessenger` is a tiny Javascript library to handle messages that carry a payload. It is designed to be embedded in another library.


## Quick Startup

```js

// Creates the messenger object:
var mess = Messenger('mycustomevent');

// Listens for an event:
mess.on('mycustomevent', function(payload) {
  console.log('fired mycustomevent: ' + payload);
});

// Fires an event:
mess.fire('mycustomevent', 'this is the payload for mycustomevent');
```


## API

## Static methods

JMessenger provides a set of static methods. You can use by typing:

```javascript
JMessenger.noConflict();
```

| Static Methods       | Description |
|:---------------------|:------------|
| noConflict           | returns the JMessenger variable to its previous owner, |



## Create a JMessenger object:

| Constructor | Description |
|:------------|:------------|
| JMessenger('messagename') | creates the JMessenger object that handles 'messagename' messages, |


## Methods

| Methods  | Description |
|:--------------------|:------------|
| addEvents           | adds events/messages, |
| addEventListener    | adds an event listener, |
| removeEventListener | removes an event listener, |
| fire                | fires an event/message, |
| on                  | alias on addEventListener, |
| off                 | alias on removeEventListener, |
| trigger             | alias on fire, |


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/jmessenger.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/jmessenger.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/jmessenger.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/jmessenger.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/jmessenger/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/jmessenger/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/jmessenger/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/jmessenger.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/jmessenger
[npm-install-url]: https://nodei.co/npm/jmessenger
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/jmessenger
[travis-url]: https://travis-ci.org/jclo/jmessenger
[coveralls-url]: https://coveralls.io/github/jclo/jmessenger?branch=master
[dependencies-url]: https://david-dm.org/jclo/jmessenger
[devdependencies-url]: https://david-dm.org/jclo/jmessenger?type=dev
[license-url]: http://opensource.org/licenses/MIT
