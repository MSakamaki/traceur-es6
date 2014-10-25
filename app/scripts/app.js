/* https://github.com/google/traceur-compiler/wiki/LanguageFeatures */
console.log('★★★ wellcome Ecma6 Play Source ★★★');


console.log(' ------ defaoult parameter  ------ ');
let f = function(args = 'foo'){
  console.log(args);
};
f();
f('bar');

console.log(' ------ for of  ------ ');
let arr = [ 3, 5, 7 ];
arr.foo = "hello";
console.log(' --> for in   ');
for (let i in arr) { console.log(i, arr[i]); }
console.log(' --> for of   ');
for (let i of arr) { console.log(i); }

console.log(' ------ generator yield ------ ');
var generator = (function* () {
  yield* (function* () {
    yield 5;
    yield 6;
  }());
}());

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
//return passed;


console.log(' ------ Async Functions(ES7) ------ ');
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncValue(value) {
  console.log('timeout in', new Date());
  await timeout(2000);
  console.log('timeout in', new Date());
  return value;
}

(async function() {
  var value = await asyncValue(42).catch(console.error.bind(console));
  console.log('before', value);
  timeout(2000).then(() => {
    console.log('done');
  });
  console.log('after', value);
  done();
})();