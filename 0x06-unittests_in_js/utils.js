const Utils = {
  calculateNumber: function(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);
    if (type === "SUM") {
      return a + b;
    } else if (type === "SUBTRACT") {
      return a - b;
    } else {
      if (b === 0) {
        return "Error";
      } else {
        return a / b;
      }
    }
  }
};
module.exports = Utils; 
