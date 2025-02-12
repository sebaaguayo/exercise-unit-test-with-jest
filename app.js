const fromEuroToDollar = function(valueInEuro) {
  let valueInDollar = valueInEuro * 1.206;
  return valueInDollar;
};

const fromDollarToYen = function(valueInDollar) {
  let valueInYen = valueInDollar * 109.86;
  return valueInYen;
};

const fromYenToPound = function(valueInYen) {
  let valueInPound = valueInYen * 0.0067;
  return valueInPound;
};

module.exports = {
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
};