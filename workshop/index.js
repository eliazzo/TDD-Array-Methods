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

function every(arr, fn){
  for (let i=0; i<arr.length; i++){
    {
      result = fn(arr[i]);
      if (result){
        arr.push(fn(arr[i]))
      };

    }
  }
  return arr;
}

