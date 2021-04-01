const str = 'hello world'

// ======= Helper Functions ======= //
function lowerFirst(str) {
  var strEndSlice = str.slice(1)
  var firstLetter = str[0].toLowerCase()
  return firstLetter + strEndSlice
}

function removeItem(array, item) {
  var index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
}

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


// ======= Challenge 4 ======= //
console.log('--- removeExtraSpace ---')

function removeExtraSpace(str) {
  var words = str.split(' ')
  for (var i = words.length; i > 1; i--) {
    if (words[i] == ''){
      removeItem(words, words[i])
    }
  }
  return words.join(' ')
}

String.prototype.removeExtraSpace = function() {
  return removeExtraSpace(this)
}

console.log(removeExtraSpace('   Hello    world!   '))
console.log('   Hello    world!   '.removeExtraSpace())


// ======= Challenge 5 ======= //
console.log('--- kebabCase ---')

function kebabCase(str) {
  var words = str.split(' ')
  var strKebab = []
  for (var i = 0; i < words.length; i++) {
    strKebab.push(lowerFirst(words[i]))
  }
  return strKebab.join('-')
}

String.prototype.kebabCase = function() {
  return kebabCase(this)
}

console.log(kebabCase(str))
console.log('hello world'.kebabCase())


// ======= Challenge 6 ======= //
console.log('--- snakeCase ---')

function snakeCase(str) {
  var words = str.split(' ')
  var strSnake = []
  for (var i = 0; i < words.length; i++) {
    strSnake.push(lowerFirst(words[i]))
  }
  return strSnake.join('_')
}

String.prototype.snakeCase = function() {
  return snakeCase(this)
}

console.log(snakeCase(str))
console.log('hello world'.snakeCase())


// ======= Challenge 7 ======= //
console.log('--- camelCase ---')

function camelCase(str) {
  var words = str.split(' ')
  var strCamel = []
  strCamel.push(words[0].toLowerCase())
  for (var i = 1; i < words.length; i++) {
    strCamel.push(upperFirst(words[i]))
  }
  return strCamel.join('')
}

String.prototype.camelCase = function() {
  return camelCase(this)
}

console.log(camelCase(str))
console.log('hello world'.camelCase())


// ======= Challenge 8 ======= //
console.log('--- shift ---')

function shift(str) {
  var strEndSlice = str.slice(1)
  var firstLetter = str[0]
  return strEndSlice + firstLetter
}

String.prototype.shift = function() {
  return shift(this)
}

console.log(shift(str))
console.log('hello world'.shift())


// ======= Challenge 9 ======= //
console.log('--- makeHashTag ---')

function makeHashTag(str) {
  var words = removeExtraSpace(str).split(' ')
  var strHashTags = []
  if (words.length > 3) {
    words.sort((a, b) => {
      b.length - a.length
    })
    for (var i = 0; i < 3; i++) {
      strHashTags.push('#' + upperFirst(words[i]))
    }
  }
  return strHashTags
}

String.prototype.makeHashTag = function() {
  return makeHashTag(this)
}

console.log(makeHashTag('Amazing bongo drums for sale'))
console.log('Amazing bongo drums for sale'.makeHashTag())


// ======= Challenge 10 ======= //
console.log('--- isEmpty ---')

function isEmpty(str) {
  var words = str.trim().split('')
  for (var i = 0; i < words.length; i++) {
    if (words[i] != ('\n' || '\r' || '\t')) {
      return false
    }
  }
  return true
}

String.prototype.isEmpty = function() {
  return isEmpty(this)
}

console.log(isEmpty(''))
console.log(''.isEmpty())
