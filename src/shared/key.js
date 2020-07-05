function generator() {
  let uniqueKey = 0;
  return function () {
    return ++uniqueKey;
  };
}

export const key = generator();
