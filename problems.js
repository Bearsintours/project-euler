// PROBLEM 1 : Multiples of 3 and 5

function multiplesOf3and5(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  multiplesOf3and5(1000);
  // -> 233168


  // PROBLEM 2 : EVEN FIBONACCI NUMBERS

  function fiboEvenSum(number) {
    let i = 0;
    let prev = 1;
    let cur = 1;
    let fib;
    let sum = 0;
    while (i < number) {
      fib = prev + cur;
      if (fib % 2 === 0) {
        sum += fib;
      }
      prev = cur;
      cur = fib;
      i++;
    }
    return sum;
  }
  
  console.log(fiboEvenSum(23));
  //-> 60696