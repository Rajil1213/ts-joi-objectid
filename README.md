
# joi-objectid

A MongoDB ObjectId validator for Joi with types!

[![Build Status](https://travis-ci.org/pebble/joi-objectid.svg?branch=master)](https://travis-ci.org/pebble/joi-objectid)

## use

`joi-objectid` validates that the value is an alphanumeric string of 24 characters
in length.

It's used just like you'd use any other `Joi` type.

```ts
import { joiObjectId } from 'ts-joi-objectid';
const joi_oid = joiObjectId(Joi);

let schema: Joi.ObjectSchema = Joi.object({
  id: joi_oid().required(),
  name: Joi.string().max(100),
  date: Joi.date()
})

```

### Installation

```
npm install joi-objectid --save
```

### Development

#### running tests

- `make test`

## Sponsored by

[Pebble Technology!](https://getpebble.com)

## License

[MIT](https://github.com/pebble/joi-objectid/blob/master/LICENSE)
