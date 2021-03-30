const str = 'hello world'

// ======= Challenge 1 ======= //
console.log('--- capitalize ---')

function capitalize(str) {
  var strEndSlice = str.slice(1)
  var firstLetter = str[0].toUpperCase()
  return firstLetter + strEndSlice
}

String.prototype.capitalize = function() {
  return capitalize(this)
}

console.log(capitalize(str))
console.log('hello world'.capitalize())


// ======= Challenge 2 ======= //
console.log('--- allCaps ---')

function allCaps(str) {
  return str.toUpperCase()
}

String.prototype.allCaps = function() {
  return allCaps(this)
}

console.log(allCaps(str))
console.log('hello world'.allCaps())
