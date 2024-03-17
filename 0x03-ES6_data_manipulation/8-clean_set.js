export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const arr = [];

  for (const elem of set) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      arr.push(elem.slice(startString.length));
    }
  }
  return arr.join('-');
}
