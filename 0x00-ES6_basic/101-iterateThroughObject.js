export default function iterateThroughObject(reportWithIterator) {
  const res = [];

  for (const emp of reportWithIterator) {
    res.push(emp);
  }
  return res.join(' | ');
}
