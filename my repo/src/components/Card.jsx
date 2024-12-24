import React from 'react'

const Card = ({children, bge='bg-gray-100'}) => {
  return (
    <div className={` ${bge} p-6 rounded-lg shadow-md `}>{children}</div>
  )
}

export default Card