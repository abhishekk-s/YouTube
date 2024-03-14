import React from 'react'

const Button = ({name}) => {
  return (
    <div><button className='px-4 py-1 m-3 bg-gray-200 border border-black rounded-md'>{name}</button></div>
  )
}

export default Button