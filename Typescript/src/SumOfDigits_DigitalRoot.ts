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
  let result: number = 0;
  result = digit_sum(n);
  return result;
};

/*  จะรับค่า  number เข้ามา  */
const digit_sum = (n: number): number => {
  let total: number = 0;
  while (n > 0) {
    total += n % 10;
    n = Math.floor(n / 10);
    
  }
  if (total > 9) {
    total = digit_sum(total);
  }
  
  return total;
};
