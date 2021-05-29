function solution(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split("");
  var sum = 0,
    i;

  for (i = 0; i < numbers.length; i++) {
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  }

  return sum;
}

function solution(roman) {
  var conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  return roman
    .match(/CM|CD|XC|XL|IX|IV|\w/g)
    .reduce((accum, roman) => accum + conversion[roman], 0);
}

function solution(roman) {
  var value = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return roman
    .split("")
    .map((d) => value[d])
    .reduce((s, v, i, o) => s + (o[i + 1] > v ? -v : v), 0);
}

// @ts-ignore
Test.assertEquals(solution("XXI"), 21);
// @ts-ignore
Test.assertEquals(solution("I"), 1);
// @ts-ignore
Test.assertEquals(solution("IV"), 4);
// @ts-ignore
Test.assertEquals(solution("MMVIII"), 2008);
// @ts-ignore
Test.assertEquals(solution("MDCLXVI"), 1666);
