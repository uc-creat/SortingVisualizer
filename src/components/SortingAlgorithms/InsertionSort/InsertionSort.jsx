
export const InsertionSortAlgorithm = (randomArray)=>{

  const lengthOfTheArray = randomArray.length;
  
  for(let currentPosition=1; currentPosition<lengthOfTheArray; currentPosition++){
    let currentValue = randomArray[currentPosition];
    let previousPosition = currentPosition-1;
    while(previousPosition>=0 && currentValue<randomArray[previousPosition]){
      randomArray[previousPosition+1] = randomArray[previousPosition];
      previousPosition-=1;
    }
    randomArray[previousPosition+1] = currentValue;
  }
  const sortedArray = randomArray;
  return sortedArray;
  
}


