// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"
isEqual('10', 10)
// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
function isEqualTakeTwo(a, b) {
  if (a === b) {
    console.log("They are equal in type or value")
  }

  else if (a == b) {
    console.log("They are equal in value")
  }

  else if (a != b) {
    console.log("They are not equal in value")
  }
}
// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"
isEqualTakeTwo(50, 52)
