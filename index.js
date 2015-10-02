function* ronnie() {
  yield 'do you know who I am?';
  yield 'do you know who I am?';
  yield 'do you know who I am?';
  yield 'do you know who I am?';
  yield 'Ronnie Pickering';
  yield 'Ronnie Pickering';
  yield 'RONNIE PICKERING';
  yield 'ME!';
}

function* theBiker(){
  yield 'do I care?';
  yield 'go on then, who are you?';
  yield 'who?';
  yield 'who?';
  yield 'who the f$&*\'s that?';
}

var ronnieGenerator = ronnie();
var bikerGenerator = theBiker();

console.log(ronnieGenerator.next().value);
console.log(ronnieGenerator.next().value);
console.log(ronnieGenerator.next().value);
console.log(ronnieGenerator.next().value);
console.log(bikerGenerator.next().value);
console.log(bikerGenerator.next().value);
console.log(ronnieGenerator.next().value);
console.log(bikerGenerator.next().value);
console.log(ronnieGenerator.next().value);
console.log(bikerGenerator.next().value);
console.log(ronnieGenerator.next().value);
console.log(bikerGenerator.next().value);
console.log(ronnieGenerator.next().value);
