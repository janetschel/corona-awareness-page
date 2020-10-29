const formatNumber = (numberToFormat: number): string => {
  const numberString = numberToFormat.toString();

  if (numberString.length <= 3) {
    return numberString;
  }

  const reversedString: string = numberString
      .split("")
      .reverse()
      .toString()
      .replace(/,/g, "");

  let numberStringReversedWithDelimiters = ""
  for (let i: number = 0; i < reversedString.length; i++) {
    numberStringReversedWithDelimiters += reversedString[i];

    if ((i + 1) % 3 === 0 && i + 1 < reversedString.length && i > 0) {
      numberStringReversedWithDelimiters += "."
    }
  }

  return numberStringReversedWithDelimiters
      .split("")
      .reverse()
      .toString()
      .replace(/,/g, "");
};

const formatLocalDateString = (dateString: string): string => {
  return `${dateString}, 00:00`;
};

const Formatter = {
  formatNumber,
  formatLocalDateString,
}

export default Formatter;
