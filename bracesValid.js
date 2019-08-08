function bracesvalid(str) {
  let curlyOn = false;
  let parenthOn = false;  
  for(let i = 0; i < str.length; i++) {
    if(str[i] == '}' && curlyOn == false || str[i] == ')' && parenthOn == false) {
      return 'Invalid';
    }
    if((str[i] == ')' && curlyOn) && i == str.length - 1 || (str[i] == '}' && parenthOn) && i == str.length - 1)  {
      return 'Invalid';
    }
    if(str[i] == '{') {
      curlyOn = true;
    }
    if(str[i] == '}' && curlyOn == true) {
      curlyOn = false;
    } 
    if(str[i] == '(') {
      parenthOn = true;
    }
    if(str[i] == ')' && parenthOn == true ) {
      parenthOn = false;
    } 
  }
  if(parenthOn || curlyOn) {
    return 'Invalid'
  } else {
    return 'Valid';
  }
}
console.log(bracesvalid(''));