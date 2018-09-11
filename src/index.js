function makeBertrana(num) {
  let number = num, n = 1;

  return function getBertrana(result = 0) {
    let d = Math.pow(5, n++);
    return d <= number ? getBertrana(result += (number / d) | 0) : result;
  }
}

module.exports = function getZerosCount(number) {
  let bertrana = makeBertrana(number)
  return bertrana();
}
