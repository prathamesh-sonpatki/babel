function* fn() {
  (yield fn) => {};
}