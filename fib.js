// Fibonacci
let fib = [0, 1];

app.get("/fibonacci/:num/", (req, res) => {
  for (i = 0; i < 100; i++) {
    newFib = fib[i - 1] + fib[i - 2];
    fib.push(newFib);
  }
  fib.forEach(el, () => {
    if (parseInt(req.params.num) === fib[f]) {
      res.send("Very good. It is Fibonacci");
    } else {
      res.send("I can tell this is not a Fibonacci number");
    }
  });
});

// for (i = 0; i < 100; i++) {
//   newFib = fib[i - 1] + fib[i - 2];
//   fib.push(newFib);
// }
// fib.forEach(num, () => {
//     if(fib[num] ===)
// })

app.listen(3000, (req, res) => {
  console.log("listening on 3000");
});
