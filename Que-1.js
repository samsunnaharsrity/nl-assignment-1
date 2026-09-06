function describeValue(value) {
  const type = typeof value;
  const isTruthy = !!value;
  return `Value is of type '${type}' | ${isTruthy ? 'truthy' : 'falsy'}`;
}

