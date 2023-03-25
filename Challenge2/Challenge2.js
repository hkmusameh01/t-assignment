
function majorityElement(arr) {
  // if there is case where there is more than one majority element
  // I will change the majority variable to arr and every 
  // majority element will be pushed to it.
  // but here I will assume there is always on majority element
  let majority;
  let obj = {};

  arr.forEach(ele => {
    if(obj[ele]) {
      obj[ele]++
    } else {
      obj[ele] = 1
    }
  });

  for(const num in obj) {
    if(obj[num] > (arr.length / 2)){
      majority = num
    }
  }

  return majority
}

console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3]))