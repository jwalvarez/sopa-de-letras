// ? Left to Right search done!
export const findWordLR = (matrix, myWord) => {
  let index = 0;
  var obj = new Map();
  let pos;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == myWord[index]) {
        pos = `${i},${j}`;
        obj[pos] = myWord[index];
        index++;
      } else {
        if (index != myWord.length) {
          obj = {};
          index = 0;
        }
      }
    }
    if (index == myWord.length) {
      return obj;
      break;
    }
  }
};

// ? Right to Left search done!
export const findWordRL = (matrix, myWord) => {
  let index = 0;
  var obj = new Map();
  let pos;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix.length - 1; j >= 0; j--) {
      if (matrix[i][j] == myWord[index]) {
        pos = `${i},${j}`;
        obj[pos] = myWord[index];
        index++;
      } else {
        if (index != myWord.length) {
          obj = {};
          index = 0;
        }
      }
    }
    if (index == myWord.length) {
      return obj;
      break;
    }
  }
};

// ? Up to Down search done!
export const findWordUD = (matrix, myWord) => {
  let index = 0;
  let obj = new Map();
  let pos;
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] == myWord[index]) {
        pos = `${i},${j}`;
        obj[pos] = myWord[index];
        index++;
      } else {
        if (index != myWord.length) {
          obj = {};
          index = 0;
        }
      }
    }
    if (index == myWord.length) {
      return obj;
      break;
    }
  }
};

// ? Down to Up search done!
export const findWordDU = (matrix, myWord) => {
  let index = 0;
  let obj = {};
  let pos;
  for (let j = matrix.length - 1; j >= 0; j--) {
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i][j] == myWord[index]) {
        pos = `${i},${j}`;
        obj[pos] = myWord[index];
        index++;
      } else {
        if (index != myWord.length) {
          obj = {};
          index = 0;
        }
      }
    }
    if (index == myWord.length) {
      return obj;
      break;
    }
  }
};
