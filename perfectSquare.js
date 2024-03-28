function perfectSquare(num) {
  // Calculate the square root of the number
  let sqrt = Math.sqrt(num);
  // Check if the square root is an integer
  if (Number.isInteger(sqrt)) {
    // If it's an integer, return the next perfect square
    return Math.pow(sqrt + 1, 2);
  } else {
    // If it's not an integer, return -1
    return -1;
  }
}
