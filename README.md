## Algorithms
This repo contains algorithm questions I've come across, and my solutions in JavaScript, each wrapped in an HTML page for handy presentation.
### 1. Numeric string zeros
Input n is a decimal number n as a string. The function exp(n) transform it into an array of numbers (given as strings
again), such that each number has only one non-zero digit and their sum equals n.

Each number in the output array should be written without any leading and trailing zeros. And the elements in the array should be sorted in descending order.

###### Examples
For n = "7970521.5544" the output should be
`exp(n) = ["7000000", "900000", "70000", "500", "20", "1", ".5", ".05", ".004", ".0004"]`

For n = "7496314" the output should be
`exp(n) = ["7000000", "400000", "90000", "6000", "300", "10", "4"]`

And for n = "0"
`exp(n) = []`
