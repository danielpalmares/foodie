import { create, all } from 'mathjs';

const mathConfig = {
  number: 'Fraction',
};

export function getFractional(value) {
  // if the value is not a decimal number
  if (value % 1 === 0) return value;

  const math = create(all, mathConfig);

  const fraction = math.fraction(value);

  const fractionFormatted = math.format(fraction, { fraction: 'ratio' });

  return fractionFormatted;
}
