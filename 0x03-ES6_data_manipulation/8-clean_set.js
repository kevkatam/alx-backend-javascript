export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const arr = [];

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      arr.push(elem.slice(startString.length));
    }
  }
  return arr.join('-');
}
