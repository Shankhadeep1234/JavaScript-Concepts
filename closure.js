function makeAdder(x) {
  // parameter `x` is an inner variable

  // inner function `add()` uses `x`, so
  // it has a "closure" over `x`
  function add(y) {
    return x + y;
  }

  return add;
}

var plusOne = makeAdder(1); // x is 1, plusOne has a reference to add(y)
var plusTen = makeAdder(10); // x is 10

console.log(plusOne(3)); // 1 (x) + 3 (y) = 4
console.log(plusTen(14)); // 10 (x) + 13 (y) = 23

/**
   In C and most other common languages, after a function returns,
     all the local variables are no longer accessible because the stack-frame is destroyed.
  In JavaScript, if you declare a function within another function, 
  then the local variables can remain accessible after returning from the function you called.
  
  A closure is a stack frame which is allocated when a function starts its execution, 
  and not freed after the function returns (as if a 'stack frame' were allocated on the heap rather than the stack!). 
  In JavaScript, you can think of a function reference variable as having both a pointer to a function as well as a hidden pointer to a closure.
   */
