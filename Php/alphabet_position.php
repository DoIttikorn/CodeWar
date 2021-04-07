Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

// $a=array("a"=>"red","b"=>"green","c"=>"blue");
// echo array_search("red",$a); // a
<?php

function alphabet_position(string $s): string
{
    $value = array(
        1 => "a",
        2 => "b",
        3 => "c",
        4 => "d",
        5 => "e",
        6 => "f",
        7 => "g",
        8 => "h",
        9 => "i",
        10 => "j",
        11 => "k",
        12 => "l",
        13 => "m",
        14 => "n",
        15 => "o",
        16 => "p",
        17 => "q",
        18 => "r",
        19 => "s",
        20 => "t",
        21 => "u",
        22 => "v",
        23 => "w",
        24 => "x",
        25 => "y",
        26 => "z",
    );
    $result = '';
    preg_match_all('/[a-zA-Z]/', $s, $output_array);
    $len = count($output_array[0]);
    for ($i = 0; $i < $len; $i++) {
        $char = strtolower($output_array[0][$i]);

        $result = $result . ' ' . array_search($char, $value);
    }
    return trim($result);
}

function alphabet_position2(string $s): string
{

    $result = [];

    for ($i = 0; $i < strlen($s); $i++) {

        if (preg_match("/^[a-zA-Z]$/", $s[$i])) {
            $result[] = ord(strtolower($s[$i])) - ord('a') + 1;
        }
    }

    return join(' ', $result);
}
$e = alphabet_position('The sunset sets at twelve o\' clock.');
echo $e;
$e = alphabet_position('The narwhal bacons at midnight.');
