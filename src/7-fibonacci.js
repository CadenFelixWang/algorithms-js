const person = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }
  
  const odd = [1, 3, 5, 7, 9]
  
  function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
  }
  
  console.log(fibonacci(2))
  console.log(fibonacci(3))
  console.log(fibonacci(7))
  