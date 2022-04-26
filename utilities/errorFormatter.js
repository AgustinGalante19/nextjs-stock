const errorFormatter = (error) => {
    error = error.split(`"`);
    let newError;
    error.forEach((e, index) => {
        index > 0 ? newError += e : newError = e;
    });
    error = newError[0].toUpperCase() + newError.slice(1);
    return error
}

export default errorFormatter;