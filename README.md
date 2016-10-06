## Software interview algorithms questions 
This repo contains algorithm questions I've come across in interviews, and my solutions (in JavaScript).
### 1. Numeric string zeros
Input n is a decimal number n as a string. The function expand(n) transform it into an array of numbers (given as strings
again), such that each number has only one non-zero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros. And the elements in the array should be sorted in descending order.

##### Examples
For n = "7970521.5544" the output should be

`["7000000", "900000", "70000", "500", "20", "1", ".5", ".05", ".004", ".0004"]`

For n = "7496314" output should be

`["7000000", "400000", "90000", "6000", "300", "10", "4"]`

And for n = "0" output should be `[]`

### 2. Repeating substring
Input parameters are a string and a substring that is repeated inside the string. The function findRepeating(string, substring) returns the number of times substring is repeated inside string.
##### Examples
For string = "xyabcdfgabcsjhg" and substring = "abc" output should be `2`

### 3. Duplicates in array
Input is a sorted array of integers. The function findDuplicates(array) returns the number of times a sequence of duplicates appears in the array.
##### Examples
For array = [1,5,5,5,7,7,7,9] 5 and 7 are repeated, output should be `2`

For array = [1,5,5,5,7,7,7,9,9] 5, 7 and 9 are repeated, so output should be `3`

### 4. Palindromize
*Palindrome* is a sequence of characters which reads the same backward or forward.

Input is an array of words (strings). The function palindromize(words) returns an array where strings that can be palindromized are returned as palindromes, and -1 is returned if a string can't be palindromized or if input is not a string.
##### Examples
For words = [3,'aba','abba','abc','cecarararar'] `aba`, `abba` and `cecarararar` are, or can be rearranged to be palindromes, so output should be

`[-1,aba,baab,-1,rcaaeaacr]`

### 5. Merge two sorted arrays
Input is two sorted arrays of integers. The function mergeSortedArrays(a, b) returns an array that is a combination of a and b, also sorted in ascending order.
##### Examples
For a = [1, 5, 5, 5, 7, 7, 7, 9] and b = [1, 2, 6, 7, 13] output should be 

`[1,1,2,5,5,5,6,7,7,7,7,9,13]`

### 6. Combine alternate digits from two integers into a new integer
Input is two integers a and b. The function returns a new integer r which is combined of the digits of a and b arranged in alternate order. If one of the integers runs out of digits, the remaining digits of the other integer are appended to the result. If result is larger than 100000, return -1.
##### Examples
For a = 12 and b = 56 output should be `1526`

For a = 12 and b = 456 output should be `41526`

For a = 123 and b = 456 output should be `-1`

