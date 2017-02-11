## Software interview algorithms questions 
This repo contains algorithm questions I've come across in interviews, and my solutions (in JavaScript).
### 1. Numeric string zeros
Input n is a decimal number n as a string. The function expand(n) transforms it into an array of numbers (also given as strings), such that each number has only one non-zero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros. And the elements in the array should be sorted in descending order.

##### Examples
For n = "7970521.5544" the output should be

`["7000000", "900000", "70000", "500", "20", "1", ".5", ".05", ".004", ".0004"]`

For n = "7496314" output should be

`["7000000", "400000", "90000", "6000", "300", "10", "4"]`

And for n = "0" output should be `[]`

[Code](https://github.com/dmk12/algorithms/blob/master/1-numeric_string_zeros.js)

### 2. Repeating substring
Input parameters are a string and a substring that is repeated inside the string. The function findRepeating(string, substring) returns the number of times substring is repeated inside string.
##### Examples
For string = "xyabcdfgabcsjhg" and substring = "abc" output should be `2`

[Code](https://github.com/dmk12/algorithms/blob/master/2-repeating_substring.js)

### 3. Duplicates in array
Input is a sorted array of integers. The function findDuplicates(array) returns the number of times a sequence of duplicates appears in the array.
##### Examples
For array = [1,5,5,5,7,7,7,9] 5 and 7 are repeated, output should be `2`

For array = [1,5,5,5,7,7,7,9,9] 5, 7 and 9 are repeated, so output should be `3`

[Code](https://github.com/dmk12/algorithms/blob/master/3-duplicates_in_array.js)

### 4. Palindromize
*Palindrome* is a sequence of characters which reads the same backward or forward.

Input is an array of words (strings). The function palindromize(words) returns an array where strings that can be palindromized are returned as palindromes, and -1 is returned if a string can't be palindromized or if input is not a string.
##### Examples
For words = [3,'aba','abba','abc','cecarararar'] `aba`, `abba` and `cecarararar` are, or can be rearranged to be palindromes, so output should be

`[-1,aba,baab,-1,rcaaeaacr]`

[Code](https://github.com/dmk12/algorithms/blob/master/4-palindromize.js)

### 5. Merge two sorted arrays
Input is two sorted arrays of integers. The function mergeSortedArrays(a, b) returns an array that is a combination of a and b, also sorted in ascending order.
##### Examples
For a = [1, 5, 5, 5, 7, 7, 7, 9] and b = [1, 2, 6, 7, 13] output should be 

`[1,1,2,5,5,5,6,7,7,7,7,9,13]`

[Code](https://github.com/dmk12/algorithms/blob/master/5-merge_sorted_arrays.js)

### 6. Combine alternate digits from two integers into a new integer
Input is two integers a and b. The function returns a new integer r which is combined of the digits of a and b arranged in alternate order. If one of the integers runs out of digits, the remaining digits of the other integer are appended to the result. If result is larger than 100000, return -1.
##### Examples
For a = 12 and b = 56 output should be `1526`

For a = 12 and b = 456 output should be `14256`

For a = 123 and b = 456 output should be `-1`

[Code](https://github.com/dmk12/algorithms/blob/master/6-alternate_digits.js)

### 7. Flatten an array of random arrays into a single array
Input is an array of random arrays arr. The function returns a new array flatArr which is combined of the elements of all arrays contained inside arr.
##### Examples
For arr = [[1,2,[3]],4] output should be `[1,2,3,4]`

[Code](https://github.com/dmk12/algorithms/7-flatten_array_of_random_arrays.js)

### 8. Break number into digits
Input is a number num. The function returns a new array arr which is combined of the digits of num.
##### Examples
For num = 3663436363 output should be `[3, 6, 6, 3, 4, 3, 6, 3, 6, 3]`

[Code](https://github.com/dmk12/algorithms/blob/master/8-break_number_into_digits.js)

### 9. Break number into summands
Input is a number num. The function returns a new array arr which is combined of each digit of num multiplied by the appropriate power of 10 for its position.
##### Examples
For num = 3663436363 output should be `[3000000000, 600000000, 60000000, 3000000, 400000, 30000, 6000, 300, 60, 3]`

[Code](https://github.com/dmk12/algorithms/blob/master/9-break_number_into_parts.js)
