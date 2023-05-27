import React, { useEffect, useState} from 'react';
import './SortingVisualizer.css';

function SortingVisualizer() {

  const [numberArray, setNumberArray] = useState([]);
  const [sort, setSort] = useState(false);
  
  
  useEffect(()=>{
    if(sort===false)randomNumberArrayGenerator(setNumberArray);
  },[sort]);

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
      <button onClick={handleSort}>Sort</button>
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
  for(let i=0;i<300;i++){
    newNumberArray.push(randomNumberGenerator(5,730));
  }
  setNumberArray(newNumberArray);
}

export default SortingVisualizer;
