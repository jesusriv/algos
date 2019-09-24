function firstNotRepeatingCharacter(s) {
  let obj = {};
  let arr = s.split("");
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]].i += 1;
    } else {
      obj[arr[i]] = { 1: i}
    }
  }
  console.log(obj);
  for (let key in obj) {
    for(let secKey in obj[key]) {
      if (obj[key].secKey == 1 && result) {
        if(parseInt(secKey) > result) {
          continue;
        } else {
          
          result = parseInt(secKey);
        }
      } else if (obj[key].secKey == 1 && !result) {
        result = parseInt(secKey);
      } 
    }
  }
  console.log(result);
}

firstNotRepeatingCharacter("abacabad")