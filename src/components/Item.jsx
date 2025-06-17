import React from 'react'
import {  useParams, useNavigate, NavLink, Route, Routes } from "react-router-dom";

import { ItemDetails } from './ItemDetails'

export const Item = (props) => {
  const { items } = props;

  const { itemID } = useParams();
  const navigate = useNavigate();

  if (!items.length) {
    navigate("/");  // Redirect to home if no items exist
    return null;
  }

  const item = items.find(item => item.id === parseInt(itemID));
  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className='item-sub-nav'>
        <NavLink to={`description`}>Description</NavLink>
        <NavLink to={`shipping`}>Shipping</NavLink>
      </nav>

      <Routes>
        <Route path={`description`} element={<ItemDetails text={item.description} />} />
        <Route path={`shipping`} element={<ItemDetails text={item.shipping} />} />
      </Routes>
    </div>
  )
}
