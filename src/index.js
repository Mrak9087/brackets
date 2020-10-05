module.exports = function check(str, bracketsConfig) {
  let tmpArr = bracketsConfig.map(item => item.join(''));
  let regStr = '';
  let sep = '';
  
  for(let item of tmpArr){
      let first = item[0];
      let last = item[1];
      if (['(','{','[','|',')','}',']'].includes(first) || ['(','{','[','|',')','}',']'].includes(last)) {
          sep = '\\';
      }

    regStr += `(${sep}${item[0]}${sep}${item[1]})+|`
  }
  // regStr += '/g';
  let regexp = new RegExp(regStr.slice(0,-1),'g');
  while(regexp.test(str))
      str = str.replace(regexp,'');
  
  // console.log(regexp.exec(str));
  return !str;
}

/*module.exports = function check(str, bracketsConfig) {
  // your solution
  let tmpArr = bracketsConfig.map(item => item.join(""));
  
  let res = str;
  /*for (let item of tmpArr){
    while(res.includes(item)){
      res = res.replace(item,"")
    }
  }
  res = repStr(res,tmpArr);
  tmpArr.reverse();
  res = repStr(res,tmpArr);


  return !res;
}

function repStr(str,arr){
  for (let item of arr){
    while(str.includes(item)){
      str = str.replace(item,"")
    }
  }
  return str;
}*/