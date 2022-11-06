import { assert } from "console";
import Joi from 'joi';

let defaultMessage = 'valid mongo id';
type joiType = typeof Joi;

export const joiObjectId = (Joi: joiType, message?: string) => {
  assert(Joi && Joi.object, 'you must pass Joi as an argument');
  if (!message || !(typeof message === 'string')) {
        message = defaultMessage;
    }
  return function objectId() {
    return Joi.string().regex(/^[0-9a-fA-F]{24}$/, message);
  };
};
