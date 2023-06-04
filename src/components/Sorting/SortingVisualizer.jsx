import React, { useEffect, useState} from 'react';
import './SortingVisualizer.css';
import { InsertionSortAlgorithm } from '../SortingAlgorithms/InsertionSort/InsertionSort';
import {BubbleSortAlgorithm} from '../SortingAlgorithms/BubbleSort/BubbleSort';

function SortingVisualizer() {

  const [numberArray, setNumberArray] = useState([]);
  const [sort, setSort] = useState(false);
  
  
  useEffect(()=>{
    if(sort===false)randomNumberArrayGenerator(setNumberArray);
  },[sort]);

  // insertion sort

  const handleInsertionSort = ()=>{
    const insertionSortedArray = InsertionSortAlgorithm(numberArray);
    setNumberArray(insertionSortedArray);
    setSort(true)

  }

  // bubble sort

  const handleBubbleSort = ()=>{
    const indexes = BubbleSortAlgorithm(numberArray);
      
    for(let index=0; index<indexes.length;index++){
      const arrayBars = document.getElementsByClassName('array-bar');
      const barOneIdx = indexes[index][0];
      const barTwoIdx = indexes[index][1];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;


      setTimeout(()=>{

        barOneStyle.backgroundColor = "pink";
        barTwoStyle.backgroundColor = "pink";

        if(indexes[index][4]===false){
          setTimeout(()=>{
            barTwoStyle.backgroundColor = "red";
            barOneStyle.backgroundColor = "blue";
          },index*100);
        }
        else{
          setTimeout(() => {
            barTwoStyle.backgroundColor = "red";
            barOneStyle.backgroundColor = "blue";
            barOneStyle.height = `${indexes[index][2]}px`;
            barTwoStyle.height = `${indexes[index][3]}px`;
          }, index*100);
        }
      },index*(0.5));

      


  }

  
}


  // simple sort - js inbuilt fn

  const handleSort = ()=>{
    numberArray.sort((a,b)=>a-b)
    setNumberArray(numberArray);
    setSort(true)

  }

  const handleReset = ()=>{
    randomNumberArrayGenerator(setNumberArray);
    setSort(false)
  }

  return (
    <div className='array-container'>
      { numberArray.map((number, index)=>{
        return <div className="array-bar" key={index} style={{height:`${number}px`}}>
        </div>
      })}


      <br></br>
      <button onClick={handleSort}>Sort</button>
      <button onClick={handleInsertionSort}>InsertionSort</button>
      <button onClick={handleBubbleSort}>BubbleSort</button>
      <button onClick={handleReset}>Reset</button>
    </div>

      
    

  )
}



const randomNumberGenerator=(min,max)=>{
  const random = Math.floor(Math.random() * (max-min+1)+min);
  return random;
}

const randomNumberArrayGenerator=(setNumberArray)=>{
  const newNumberArray = []
  for(let i=0;i<320;i++){
    newNumberArray.push(randomNumberGenerator(5,730));
  }
  setNumberArray(newNumberArray);
}

export default SortingVisualizer;
