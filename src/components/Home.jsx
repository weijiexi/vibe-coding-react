import React from 'react'
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const routeToShop = () => {
        navigate("/items-list");
    }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://web-design-s3.s3.us-east-2.amazonaws.com/images/bloom/baseurl.png'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}