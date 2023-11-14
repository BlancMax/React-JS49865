import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nav_Bar from "../src/components/Nabvar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import { useState, useEffect } from "react";


function App() {

  const greeting ="Bienvenidos a E-Commerce..."

  return (
    <>
      <BrowserRouter>
        <ItemListContainer mensaje={greeting}/>
        <Nav_Bar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/idProduct" element={<ItemDetailContainer/>}/>
          <Route path="/CartWidget" element={<CartWidget/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
