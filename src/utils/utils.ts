function generator(){
  let counter = 1;
  return function(){
    return counter++;
  }
}

export {generator}
