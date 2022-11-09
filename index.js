const strCount = (str) => {
  const strCharsCount = str.length;
  return strCharsCount;
};

const strCountCheck = (str) => {
  if (str.length >= 1 && strCount.length <= 10) {
    throw new Error("String is too long or too short");
  }
};

const reverseString = (str) => {
  const reversedString = str.split("").reverse().join("").toLowerCase();
  return reversedString;
};

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    if (a < b) {
      throw new Error("First number should be greater than the second number");
    }
    return a - b;
  }

  static divide(a, b) {
    if (a === 0) {
      throw new Error("Can not divide zero by a number");
    }
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

const capsLetter = (str) => {
  let letters = str.charAt(0).toUpperCase() + str.slice(1);
  return letters;
};

capsLetter("hello");

module.exports = {
  strCountCheck,
  strCount,
  reverseString,
  Calculator,
  capsLetter,
};
