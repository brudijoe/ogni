// Add two numbers
export function add(firstNumber: number) {
  return function (secondNumber: number) {
    return firstNumber + secondNumber;
  };
}
