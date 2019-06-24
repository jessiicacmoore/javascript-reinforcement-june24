function sumStr(str) {
  let numSum = 0;
  str.split('').forEach(num => {
    numSum += +num;
  })
  return numSum;
}

function luckCheck(str) {
  let strMiddle = str.length / 2;
  let left = str.slice(0, Math.floor(strMiddle));
  let right = str.slice(Math.ceil(strMiddle));

  console.log(sumStr(left) === sumStr(right));
}


luckCheck('56328116')