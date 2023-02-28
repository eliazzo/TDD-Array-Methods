function map(array, fn) {
  const result = [];
  for(let i = 0; i < array.length; i ++){
    result.push(fn(array[i]))
  }
  return result;
}


function filter(arr, fn){
  const result = [];
  for (let i = 0; i < arr.length; i ++){
    if(fn(arr[i])){
      result.push(arr[i])
    }
  }
  console.log(result);
  return result;
  }

  function every(array, fn) {
    let result = true;
    for (let i = 0; i < array.length; i++) {
      const el = array[i];
      result = fn(el, i);
      if (!result) break; // need to stop if an element fails
    }
    return result;
  }

 
function some(arr, fn){
  for(let i=0; i<arr.length; i++){
    if(fn(arr[i])) {
      return true;
    }
  }
      return false;
}

function find(arr, fn){
  for(let i=0; i<arr.length; i++){
    const element = arr[i];
    const result = fn(element);
    if (result){
      return element;
      break;
    }
  }
  return undefined
}

function reduce(arr, fn, initialVal){
  let total = initialVal;
  
  for(let i=0; i<arr.length; i++){
    total = fn(total, arr[i], i, arr);
  }
    console.log(total);
    return total;
  
}