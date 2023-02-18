module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  let stack = [];
  let beginStr = "";
  let endStr = "";
  for (let item of bracketsConfig) {
    beginStr += item[0];
    endStr += item[1];
  }
  for (let item of arr) {
    if (beginStr.includes(item)) {
      stack.push(item);
      break;
    }
    if (endStr.includes(item)) {
      if (endStr.indexOf(item) === beginStr.indexOf(stack.at(-1))) {
        stack.pop;
        break;
      }
      return false;
    }
  }
  return stack.length ? false : true;
};
