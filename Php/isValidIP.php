
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Input to the function is guaranteed to be a single string.
Valid inputs:
1.2.3.4
123.45.67.89
Invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
<?php
function isValidIP(string $str): bool
{
    $isValid = filter_var($str, FILTER_VALIDATE_IP,FILTER_FLAG_IPV4);
    return ($isValid != false ? true:false);
}
echo "\n";
echo "\n";
echo "\n";
$valid = [
    '0.0.0.0',
    '255.255.255.255',
    '238.46.26.43',
    '0.34.82.53',
];
echo 'valid';
foreach ($valid as $input) {
    $test1 = isValidIP($input);
    echo "$test1\n";
}

$invalid = [
    '',
    'abc.def.ghi.jkl',
    '123.456.789.0',
    ' 1.2.3.4',
];
echo 'invalid';

foreach($invalid as $input) {
    $test2 = isValidIP($input);
    echo "$test2\n";
}
?>
