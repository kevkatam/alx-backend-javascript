export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const arr = [];

  for (const elem of set) {
    if (elem.startsWith(startString) && typeof elem === 'string') {
      arr.push(elem.slice(startString.length));
    }
  }
  return arr.join('-');
}
