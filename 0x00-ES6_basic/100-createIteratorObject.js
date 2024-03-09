export default function createIteratorObject(report) {
  return (function* _() {
    for (const dep of Object.values(report.allEmployees)) {
      for (const emp of dep) {
        yield emp;
      }
    }
  }());
}
