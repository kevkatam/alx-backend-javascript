export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](HolbertonClass) {
    if (HolbertonClass === 'number') {
      return this._size;
    }
    if (HolbertonClass === 'string') {
      return this._location;
    }
    return this;
  }
}
