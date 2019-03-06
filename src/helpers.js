export const formatDate = timestamp => {
  const datetime = new Date(timestamp);
  const date = datetime.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const time = datetime.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric"
  });
  return `${date} at ${time}`;
};

export const numberToWord = number => {
  // make sure it's a number
  const n = Number(number);
  // define words
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];
  // build capitalize function
  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
  // convert and return
  if (n < 1) {
    return `No`;
  } else if (n < 10) {
    return capitalize(ones[n]);
  } else if (n < 20) {
    return capitalize(teens[n - 10]);
  } else if (n < 100) {
    return `${capitalize(tens[Math.floor(n / 10)])} ${ones[n % 10]}`;
  } else {
    return `A lot of`;
  }
};

export const formatAddress = cafe => {
  const city = cafe.properties.addrCity;
  const postcode = cafe.properties.addrPostcode;
  const street = cafe.properties.addrStreet;
  const number = cafe.properties.addrHousenumber;

  // fun with template literals and ternary operators
  return `${
    city | postcode | street
      ? `${street ? `${number ? `${number} ` : ``}${street}, ` : ``}${
          postcode ? (city ? `${postcode} ` : postcode) : ``
        }${city ? city : ``}`
      : undefined
  }`;
};

export const averageRating = reviews => {
  if (!reviews) return null;
  // build ratings array
  const ratings = Object.values(reviews).map(review => review.rating);
  // reduce to average
  let average = ratings.reduce((a, b) => a + b) / ratings.length;
  // round to .1
  const rounded = Math.round(average * 10) / 10;
  return rounded;
};
