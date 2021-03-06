import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import Homescreen from '../pages/Homescreen';
import Favorites from '../pages/Favorites';
import Item from '../pages/Item';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={Homescreen()}></Route>
      <Route exact path="/products" element={Products()}></Route>
      <Route exact path="/favorites" element={Favorites()}></Route>
      <Route exact path="/item/:id" element={Item()}></Route>
    </Routes>
  );
};

export default Main;
