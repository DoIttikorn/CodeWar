export class Vowel {
  static getCount(str: string) {
    let list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
  }
}
