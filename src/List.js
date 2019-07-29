import React from 'react';

export function List({title, children}){
  return(
    <div className='list'>
    <h4>{title}</h4>
    <ul>
      {children}
    </ul>
    
    </div>  
  )

}
