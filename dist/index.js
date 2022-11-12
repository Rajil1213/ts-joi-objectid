"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiObjectId = void 0;
const console_1 = require("console");
let defaultMessage = 'valid mongo id';
const joiObjectId = (Joi, message) => {
    (0, console_1.assert)(Joi && Joi.object, 'you must pass Joi as an argument');
    if (!message || !(typeof message === 'string')) {
        message = defaultMessage;
    }
    return function objectId() {
        return Joi.string().regex(/^[0-9a-fA-F]{24}$/, message);
    };
};
exports.joiObjectId = joiObjectId;
