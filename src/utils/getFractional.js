import { create, all } from 'mathjs';

const mathConfig = {
  number: 'Fraction',
};

/**
 * @param value A decimal value which its remainder by 1 is equal to 0
 * @returns The value as a fraction
 */
export function getFractional(value) {
  // check value's remainder
  if (value % 1 === 0) return value;

  // then get fraction
  const math = create(all, mathConfig);
  const fraction = math.fraction(value);
  const fractionFormatted = math.format(fraction, { fraction: 'ratio' });
  return fractionFormatted;
}
