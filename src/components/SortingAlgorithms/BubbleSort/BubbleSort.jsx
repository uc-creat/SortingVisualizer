export const BubbleSortAlgorithm = (unsortedArray)=>{
  let indexes = [];
  let bool = false;
  const lengthOfUnsortedArray = unsortedArray.length;
  for(let i=0; i<lengthOfUnsortedArray;i++){
    for(let j=0;j<lengthOfUnsortedArray-1;j++){
      if(unsortedArray[j]>unsortedArray[j+1]){
        bool = true;
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j+1];
        unsortedArray[j+1] = temp;
        
        indexes.push([j,j+1,unsortedArray[j],unsortedArray[j+1],bool]);
      }
      else{
        bool = false;
        indexes.push([j,j+1,unsortedArray[j],unsortedArray[j+1],bool])
      }
    }
  }
  return indexes;
}
