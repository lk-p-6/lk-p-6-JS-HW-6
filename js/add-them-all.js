'use strict';

function addThemAll(...args){
  let addResult = 0;
  args.forEach(i => {
    addResult += i;
  });
  return addResult;
}

console.log(addThemAll(5,5,10));