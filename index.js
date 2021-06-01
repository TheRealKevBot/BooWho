// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
    if (typeof bool === typeof true) {
        return true
    } else {
        return false
    }
}
  
  console.log(booWho(null));
  console.log(booWho(true));
  console.log(booWho(false));
  console.log(booWho([1, 2, 3]));
  console.log(booWho([].slice));
  console.log(booWho({ "a": 1 }));
  console.log(booWho(1));
  console.log(booWho(Boolean(false)));
  console.log(booWho(Boolean(true)));
  console.log(booWho(NaN));
  console.log(booWho("a"));
  console.log(booWho("false"));
  console.log(booWho(Boolean(0)));
  console.log(booWho(Boolean(1)));
  console.log(booWho("true"));
  console.log(booWho(false));