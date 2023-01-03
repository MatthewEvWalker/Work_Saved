function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  const reversed =  str.split("").reverse().join("");
  return reversed;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  return this.reverse(str) === str;
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  const words = str.split(" ")

  const captial = words.map(word => {
    const firstLetter = word[0]
    const restOfWord = word.substring(1)
    return `${firstLetter.toUpperCase()}${restOfWord}`
  })
  return captial.join(" ")
};

module.exports = Algo;
