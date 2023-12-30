// Exercise: Sum of Even Numbers
// In this exercise, we'll write a loop that sums only the even numbers in an array.

const numbers = [2, 3, 4, 5, 6, 7];
let sum = 0;

// Loop through each number in the array
for (let i = 0; i < numbers.length; i++) {
    // Check if the number is even
    if (numbers[i] % 2 === 0) {
        // Add the even number to the sum
        sum += numbers[i];
    }
}

// Output the result
console.log("The sum of the even numbers is:", sum);
