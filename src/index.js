/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-extend-native */
// ======= Helper Functions ======= //
function lowerFirst(str) {
  const strEndSlice = str.slice(1);
  const firstLetter = str[0].toLowerCase();
  return firstLetter + strEndSlice;
}

function removeItem(array, item) {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
}

// ======= upperFirst ======= //
function upperFirst(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  const strEndSlice = str.slice(1);
  const firstLetter = str[0].toUpperCase();
  return firstLetter + strEndSlice;
}

String.prototype.upperFirst = function () {
  return upperFirst(this);
};

// ======= allCaps ======= //
function allCaps(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  return str.toUpperCase();
}

String.prototype.allCaps = function () {
  return allCaps(this);
};

// ======= capitalizeWords ======= //
function capitalizeWords(str) {
  const words = str.split(' ');
  const capsList = [];
  for (let i = 0; i < words.length; i += 1) {
    capsList.push(upperFirst(words[i]));
  }
  return capsList.join(' ');
}

String.prototype.capitalizeWords = function () {
  return capitalizeWords(this);
};

// ======= removeExtraSpace ======= //
function removeExtraSpace(str) {
  const words = str.split(' ');
  for (let i = words.length; i > 1; i -= 1) {
    if (words[i] === '') {
      removeItem(words, words[i]);
    }
  }
  return words.join(' ');
}

String.prototype.removeExtraSpace = function () {
  return removeExtraSpace(this);
};

// ======= kebabCase ======= //
function kebabCase(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  const words = str.split(' ');
  const strKebab = [];
  for (let i = 0; i < words.length; i += 1) {
    strKebab.push(lowerFirst(words[i]));
  }
  return strKebab.join('-');
}

String.prototype.kebabCase = function () {
  return kebabCase(this);
};

// ======= snakeCase ======= //
function snakeCase(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  const words = str.split(' ');
  const strSnake = [];
  for (let i = 0; i < words.length; i += 1) {
    strSnake.push(lowerFirst(words[i]));
  }
  return strSnake.join('_');
}

String.prototype.snakeCase = function () {
  return snakeCase(this);
};

// ======= camelCase ======= //
function camelCase(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  const words = str.split(' ');
  const strCamel = [];
  strCamel.push(words[0].toLowerCase());
  for (let i = 1; i < words.length; i += 1) {
    strCamel.push(upperFirst(words[i]));
  }
  return strCamel.join('');
}

String.prototype.camelCase = function () {
  return camelCase(this);
};

// ======= shift ======= //
function shift(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  const strEndSlice = str.slice(1);
  const firstLetter = str[0];
  return strEndSlice + firstLetter;
}

String.prototype.shift = function () {
  return shift(this);
};

// ======= makeHashTag ======= //
function makeHashTag(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  const words = removeExtraSpace(str).split(' ');
  const strHashTags = [];
  if (words.length > 3) {
    // eslint-disable-next-line array-callback-return
    words.sort((a, b) => {
      // eslint-disable-next-line no-unused-expressions
      b.length - a.length;
    });
    for (let i = 0; i < 3; i += 1) {
      strHashTags.push(`#${upperFirst(words[i])}`);
    }
  }
  return strHashTags;
}

String.prototype.makeHashTag = function () {
  return makeHashTag(this);
};

// ======= isEmpty ======= //
function isEmpty(str) {
  const words = str.trim().split('');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] !== ('\n' || '\r' || '\t')) {
      return false;
    }
  }
  return true;
}

String.prototype.isEmpty = function () {
  return isEmpty(this);
};

module.exports.upperFirst = upperFirst;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpace = removeExtraSpace;
module.exports.kebabCase = kebabCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
