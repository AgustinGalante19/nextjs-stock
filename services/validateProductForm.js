import productSchema from './schemas/joi/product';
import errorFormatter from '../utilities/errorFormatter'

const productValidation = async (name, model, brand, quantity) => {
    try {
        const result = await productSchema.validateAsync({ name, model, brand, quantity });
        return result;
    } catch (e) {
        return { error: errorFormatter(e.message) }
    }
}

export default productValidation;