export function isCnpj(value: string): boolean {
  if (!value) {
    return false;
  }

  const BLACKLIST = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
  ];

  const cnpj = value?.replace(/\D/g, '');

  if (!cnpj) {
    return false;
  }

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  if (!cnpj) {
    return false;
  }
  if (cnpj.length !== 14) {
    return false;
  }
  // || BLACKLIST.map(e => cnpj.includes(e))
  if (BLACKLIST.includes(cnpj)) {
    return false;
  }

  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(0))) {
    return false;
  }

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let k = size; k >= 1; k--) {
    sum += Number(numbers.charAt(size - k)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(1))) {
    return false;
  }
  return true;
}
