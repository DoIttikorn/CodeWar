/**
 * https://en.wikipedia.org/wiki/Digital_root
 * Digital root is the recursive sum of all the digits in a number.
    Given n, take the sum of the digits of n. If that value has 
    more than one digit, continue reducing in this way until a 
    single-digit number is produced. The input will be a non-negative 
    integer.
    Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

export const digitalRoot = (n: number): number => {
  var total: number = 0;
  let x: number = 0;
  while (n > 0) {
    let modulus_n :number = n % 10;
    total += modulus_n; 
    
    n = Math.floor(n / 10);
  }
  console.log("total = "+total)
  return total;
};

const digit_sum = (): number => {
  return 0;
};
