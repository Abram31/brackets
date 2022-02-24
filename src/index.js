module.exports = 
function check(str, bracketsConfig) {
  debugger;

  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex)
      if (bracket === brackets[bracketsIndex + 1]) {
        stack.pop();
      }

    }
    else {
      if (stack.pop() !== bracketsIndex - 1) {
        return false;
      }
    }

  }
  return stack.length === 0

}



// function check(str, bracketsConfig) {

//   let brackets = bracketsConfig.join('').replace(/,/g, '');
//   let stack = [];
//   for (let bracket of str) {
//     let bracketsIndex = brackets.indexOf(bracket)
//     let lastBracketsIndex = str.indexOf(brackets[bracketsIndex + 1]) - bracketsIndex

//     if (bracketsIndex % 2 === 0 && lastBracketsIndex % 2 === 0) {
//       stack.push(bracketsIndex)
//       if (bracket === brackets[bracketsIndex + 1]) {
//         stack.pop();
//       }

//     }
//     else {
//       if (stack.pop() !== bracketsIndex - 1) {
//         return false;
//       }
//     }

//   }
//   return stack.length === 0

// }


// function check(str, bracketsConfig) {
//   debugger;

//   let brackets = bracketsConfig.join('').replace(/,/g, '');
//   let bracketsOpen = bracketsConfig.reduce((accum, item) => accum + item[0], '');
//   let bracketsClose = bracketsConfig.reduce((accum, item) => accum + item[1], '');
//   let stack = [];
//   for (i = 0; i < str.length; i++) {

//     let bracketStr = str[i]

//     if (bracketsOpen.includes(bracketStr) && bracketsOpen.includes(bracketStr) != bracketsClose.includes(bracketStr)) {
//       stack.push(bracketStr)
//     } else {
//       if (stack.length === 0 && bracketsOpen.includes(bracketStr) != bracketsClose.includes(bracketStr)) {
//         return false
//       } else if (bracketsOpen.includes(bracketStr) == bracketsClose.includes(bracketStr)) { 
//         continue 
//       }
//       let topElement = stack[stack.length - 1]

//       if (brackets.split('').findIndex(item => item === topElement) + 1) {
//         stack.pop();
//       } else {
//         return false
//       }

//     }

//   }

//   return stack.length === 0

// }




// function check(str, bracketsConfig) {
//   debugger;

//   let brackets = bracketsConfig.join('').replace(/,/g, '');
//   let stack = [];
//   for (let bracket of str) {
//     let bracketsIndex = brackets.indexOf(bracket)

//     if (bracketsIndex % 2 === 0) {
//       stack.push(bracketsIndex)
//     } else if ((brackets[brackets.indexOf(bracket) + 1] - bracketsIndex) % 2 == 0) {
//       return false;
//     } else if (bracket === brackets[bracketsIndex + 1]) {
//       stack.pop();
//     }

//     else {
//       if (stack.pop() !== bracketsIndex - 1) {
//         return false;
//       }
//     }

//   }
//   return stack.length === 0

// }



  // function check(str, bracketsConfig) {

  //   if (str.length <= 1)
  //     return false

  //   let matchingOpeningBracket, ch
  //   let stack = []

  //   let openingBrackets = bracketsConfig.reduce((accum, item) => accum + item[0], '').split('');
  //   let closingBrackets = bracketsConfig.reduce((accum, item) => accum + item[1], '').split('');;

  //   for (let i = 0; i < str.length; i++) {
  //     ch = str[i]

  //     if (closingBrackets.indexOf(ch) > -1) {
  //       matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
  //       if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
  //         return false
  //       }
  //     } else {
  //       stack.push(ch)
  //     }
  //   }

  //   return (stack.length == 0)
  // };
