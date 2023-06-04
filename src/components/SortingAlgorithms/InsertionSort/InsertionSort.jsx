
export const InsertionSortAlgorithm = (randomArray)=>{
  let indexes = [];
  let bool = false;

  const lengthOfTheArray = randomArray.length;
  
  for(let currentPosition=1; currentPosition<lengthOfTheArray; currentPosition++){
    let currentValue = randomArray[currentPosition];
    let previousPosition = currentPosition-1;

    indexes.push([currentPosition,previousPosition,randomArray[currentPosition],randomArray[previousPosition],bool])

    while(previousPosition>=0 && currentValue<randomArray[previousPosition]){
      randomArray[previousPosition+1] = randomArray[previousPosition];

      bool = true
      indexes.push([currentPosition,previousPosition,randomArray[currentPosition],randomArray[previousPosition],bool])


      previousPosition-=1;
    }
    randomArray[previousPosition+1] = currentValue;
    // indexes.push([currentPosition,previousPosition+1,randomArray[currentPosition],randomArray[previousPosition],bool])
    bool = false
  }
  return indexes;
  
}


