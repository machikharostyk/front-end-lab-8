function predicateFunction(el) {
  return el > 3;
}
function getFilteredArray(arr, predicateFunction) {
  var FilteredArr = [];
  forEach(arr, function(arr){
    if(predicateFunction(arr)==true){
    FilteredArr.push(arr);
    }
  });
  console.log (FilteredArr);
}

