const timingMiddleware = store => next => action => {
  console.time(action.type);
  let result = next(action);
  console.timeEnd(action.type);
  return result;
};

export default timingMiddleware;
