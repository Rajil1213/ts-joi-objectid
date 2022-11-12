
# joi-objectid

A MongoDB ObjectId validator for Joi with types!
Package based on [joi-objectid](https://github.com/pebble/joi-objectid)

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
```
npm run dev
```

## License
[MIT](https://github.com/Rajil1213/ts-joi-objectid/blob/master/LICENSE)
