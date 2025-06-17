import React from 'react'

export const ItemDetails = (props) => {
  const { text } = props

  return (
    <div>
      <p className='item-details'>{text}</p>
    </div>
  )
}
