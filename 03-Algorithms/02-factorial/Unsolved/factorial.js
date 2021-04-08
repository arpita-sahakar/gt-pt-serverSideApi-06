// Write code to create a function that returns the factorial of `num`

// var factorial = function(num) {};

const factorial = (num) => {
  let result = 1;

  for (i = 1; i <= num; i++) {
    result = result * i;
  }

  console.log(result);
};

factorial(5);
