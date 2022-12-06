import React from 'react';
import './LoadSkeleton.css';
function Item(){
  return (
    <li className='loadSkeletonItem'>
    </li>
  )
}


function LoadSkeleton(props) {
  return(
    <ul className='loadSkeletonContainer'>
      {Array.from(Array(Number(props.value)), (e,i) => {
        return <Item/>
      })}
    </ul>
  )
}

export { LoadSkeleton };