function bracesvalid(str) {
  // SET BOOLEANS FOR OPENED CURLY BRACES AND PARANTHSES TO FALSE
  let curlyOn = false;
  let parenthOn = false;  
  // ITERATE THROUGH THE STRING
  for(let i = 0; i < str.length; i++) {
    // IF CHARACTER AT INDEX i IS A CLOSED CURLY BRACE (OR CLOSED PATATHESES) AND AN OPENED CURLY (OR OPENED PARANTHESES) HAS NOT BEEN DETECTED UP TO THIS POINT,
    // RETURN INVALID
    if(str[i] == '}' && curlyOn == false || str[i] == ')' && parenthOn == false) {
      return 'Invalid';
    }
    // IF CHARACTER AT INDEX i IS A CLOSED CURLY (OR CLOSED PARANTHESES) AND OPENED PARANTHESES (OR OPENED CURLY) IS TRUE,
    // AND i IS ON THE LAST CHARACTER OF THE STRING
    // RETURN INVALID
    // EXAMPLE 'ST{IN()G)';
    if((str[i] == ')' && curlyOn) && i == str.length - 1 || (str[i] == '}' && parenthOn) && i == str.length - 1)  {
      return 'Invalid';
    }
    // IF CHARACTER AT INDEX i IS AN OPENED CURLY, 
    // SET CURLY OPENED TO TRU
    if(str[i] == '{') {
      curlyOn = true;
    }
    // IF CHARACTER AT INDEX i IS A CLOSEDD CURLY AND CURLY OPENED IS TRUE,
    // SET CURLY OPENEDED TO FALSE
    if(str[i] == '}' && curlyOn == true) {
      curlyOn = false;
    } 
    // IF CHARACTER AT INDEX i IS AN OPENED PARANTHESES, 
    // SET PARANTHESES OPENED TO TRUE
    if(str[i] == '(') {
      parenthOn = true;
    }
    // IF CHARACTER AT INDEX i IS A CLOSEDD PARENTHESES AND PARENTHESES OPENED IS TRUE,
    // SET CURLY OPENEDED TO FALSE
    if(str[i] == ')' && parenthOn == true ) {
      parenthOn = false;
    } 
  }
  // EDGES: IF EITHER CURLY OR PARENTHESES IS STILL OPENED, RETURN INVALID
  // OTHERWISE, RETURN VALID
  if(parenthOn || curlyOn) {
    return 'Invalid'
  } else {
    return 'Valid';
  }
}
console.log(bracesvalid(''));