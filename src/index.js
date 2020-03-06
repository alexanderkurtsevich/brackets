module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(a => a.join(''));
  while (bracketsConfig.some(a => str.includes(a))) {
    for (i = 0; i < bracketsConfig.length; i++) {
      if (str.includes(bracketsConfig[i])) {
        str = str.replace(bracketsConfig[i], '');
      }
    }
  }
  return (str.length == 0) ? true : false
}