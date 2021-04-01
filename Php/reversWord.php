<?php

function spinWords(string $str): string
{
    $t = explode(" ", $str);
    foreach ($t as $key => $value) {
        $len = strlen($value);
        if ($len > 5) {
            $re = strrev($value);
            $t[$key] = $re;
        }
    }
    return $t;
}
$rs  =  spinWords("Welcome");
echo $rs;
// echo spinWords("Hey fellow warriors");
// echo spinWords("This is a test");
