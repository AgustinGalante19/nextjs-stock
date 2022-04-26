import Joi from 'joi';

const productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    brand: Joi.string().min(1).max(100).required(),
    model: Joi.string().min(1).max(100).required(),
    quantity: Joi.number().integer().min(1).required()
});

export default productSchema;