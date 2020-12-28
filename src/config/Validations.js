export function validateOnlyNumbers(data) {
  const numbers = /^[0-9]+$/;
  return data.match(numbers);
}
