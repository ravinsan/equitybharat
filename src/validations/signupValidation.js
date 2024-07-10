// userValidation.js
import Joi from 'joi';

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Name should be a type of text',
        'string.empty': 'Name cannot be an empty field',
        'string.min': 'Name should have a minimum length of {#limit}',
        'string.max': 'Name should have a maximum length of {#limit}',
        'any.required': 'Name is a required field'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be a valid email',
        'any.required': 'Email is a required field',
        'string.empty': 'Email cannot be an empty field',
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': 'Password should have a minimum length of {#limit}',
        'any.required': 'Password is a required field'
    }),
    mobile: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
        'string.pattern.base': 'Mobile number must be exactly 10 digits',
        'any.required': 'Mobile number is a required field'
    })
});

export default userSchema;
