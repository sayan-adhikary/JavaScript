import { UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS } from './constants';

export const generatePassword = (
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
) => {
  let characters = '';

  if (uppercase) {
    characters += UPPERCASE;
  }

  if (lowercase) {
    characters += LOWERCASE;
  }

  if (numbers) {
    characters += NUMBERS;
  }

  if (symbols) {
    characters += SYMBOLS;
  }

  if (!characters) {
    return '';
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};
