const str = 'hello world'

// ======= Challenge 1 ======= //
console.log('--- capitalize ---')

function upperFirst(str) {
  var strEndSlice = str.slice(1)
  var firstLetter = str[0].toUpperCase()
  return firstLetter + strEndSlice
}

String.prototype.upperFirst = function() {
  return upperFirst(this)
}

console.log(upperFirst(str))
console.log('hello world'.upperFirst())


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


// ======= Challenge 3 ======= //
console.log('--- capitalizeWords ---')

function capitalizeWords(str) {
  var words = str.split(' ')
  var capsList = []
  for (var i = 0; i < words.length; i++) {
    capsList.push(upperFirst(words[i]))
  }
  return capsList.join(' ')
}

String.prototype.capitalizeWords = function() {
  return capitalizeWords(this)
}

console.log(capitalizeWords(str))
console.log('hello world'.capitalizeWords())
