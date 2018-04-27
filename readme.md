# metadater [![Build Status](https://travis-ci.org/caroso1222/metadater.svg?branch=master)](https://travis-ci.org/caroso1222/metadater) [![codecov](https://codecov.io/gh/caroso1222/metadater/badge.svg?branch=master)](https://codecov.io/gh/caroso1222/metadater?branch=master)

> Add metadata to your deployed app


## Install

```
$ npm install metadater
```


## Usage

```js
const metadater = require('metadater');

metadater('unicorns');
//=> 'unicorns & rainbows'
```


## API

### metadater(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global metadater
```

```
$ metadater --help

  Usage
    metadater [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ metadater
    unicorns & rainbows
    $ metadater ponies
    ponies & rainbows
```


## License

MIT © [Carlos Edinson Roso Espinosa](https://github.com/caroso1222/metadater)
