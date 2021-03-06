export default function promiseMiddleware() {
  return next => action => {
    const { promise, types, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    const actionPromise = promise;

    actionPromise.then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => {
        // console.error(error);
        next({ ...rest, error, type: FAILURE })
      }
    ).catch((error)=> {
      console.error('MIDDLEWARE ERROR:', error);
      next({...rest, error, type: FAILURE});
    });

    return actionPromise
  };
}
