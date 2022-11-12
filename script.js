let result = 0;
function counterMaker() {
  return function (val = 0) {
    return (result += val);
  };
}
const counter = counterMaker();
console.log(counter());
console.log(counter());
console.log(counter(1));
console.log(counter());
console.log(counter(3));
console.log(counter(7));
console.log(counter(-5));
