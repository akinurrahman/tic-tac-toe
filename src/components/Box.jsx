import React from 'react'
const Box = ({onClickProp,value}) => {
  // Determine the class based on the value
  const style = value === 'X' ? 'box x' : value === 'O' ? 'box o' : 'box';
  
  return (

    <>
    
      <button onClick={onClickProp} className={style}>{value}</button>
    </>
  )
}

export default Box
