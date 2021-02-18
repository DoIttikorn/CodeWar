import { Vowel } from "../solution/vowel_count";
import { assert } from "chai";
/*descibe,it  npm i --save-dev @types/mocha */
describe("getCount", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(Vowel.getCount("abracadabra"), 5);
  });

  it("should return 4 for 'pear tree'", function () {
    assert.strictEqual(Vowel.getCount("pear tree"), 4);
  });

  it("should return 13 for 'o a kak ushakov lil vo kashu kakao'", function () {
    assert.strictEqual(
      Vowel.getCount("o a kak ushakov lil vo kashu kakao"),
      13
    );
  });

  it("should return 0 for 'my pyx'", function () {
    assert.strictEqual(Vowel.getCount("my pyx"), 0);
  });

  it("should return 168 for a long input", function () {
    assert.strictEqual(
      Vowel.getCount(
        "tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"
      ),
      168
    );
  });

  it("should return expected results for random inputs", function () {
    for (let i = 0; i < 100; ++i) {
      let str = Array.apply(null, new Array(~~(Math.random() * 300)))
        .map((_) =>
          String.fromCharCode(
            Math.random() < 0.2 ? 32 : ~~(Math.random() * 26) + 97
          )
        )
        .join("")
        .replace(/ {2,}/g, " ")
        .trim();

      let expected = /[aeiou]/gi.test(str) ? str.match(/[aeiou]/gi).length : 0;
      let actual = Vowel.getCount(str);

      assert.strictEqual(actual, expected);
    }
  });
});
