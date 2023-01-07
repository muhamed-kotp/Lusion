import React, { useState, useEffect } from "react";
import Shop from "./Components/Shop";
import Home from "./Components/Home";
import Navs from "./Components/Navs";
import { Routes, Route } from "react-router-dom";

import ShoppingCarD from "./Components/ShoppingCarD";
import shopC1 from "./Photos/shopC1.jpg";
import shopC2 from "./Photos/shopC2.jpg";
import shopC3 from "./Photos/shopC3.jpg";
import shopC4 from "./Photos/shopC4.jpg";
import shopC5 from "./Photos/shopC5.jpg";
import shopC6 from "./Photos/shopC6.jpg";
import shopC7 from "./Photos/shopC7.jpg";
import shopC8 from "./Photos/shopC8.jpg";

// 'Quilted Gilet With Hood', 'Shirt' , 'Jeans', 'Hood', 'Clothing',' Bag Brand', 'Accessories', 'Shoes'

const App = () => {
  const [total, settotal] = useState([]);
  const [Products] = useState([
    {
      id: 1,
      name: "Gilet With Hood",
      price: 300,
      count: 8,
      img: shopC1,
      pusrches: 1,
    },
    { id: 2, name: "Shirt", price: 220, count: 18, img: shopC2, pusrches: 1 },
    { id: 3, name: "Shirt", price: 150, count: 6, img: shopC3, pusrches: 1 },
    { id: 4, name: "Hood", price: 120, count: 12, img: shopC4, pusrches: 1 },
    { id: 5, name: "Hood", price: 120, count: 15, img: shopC5, pusrches: 1 },
    { id: 6, name: "Hood", price: 180, count: 6, img: shopC6, pusrches: 1 },
    { id: 7, name: "Jeans", price: 250, count: 16, img: shopC7, pusrches: 1 },
    { id: 8, name: "Jeans", price: 250, count: 15, img: shopC8, pusrches: 1 },
    { id: 9, name: "Clothing", price: 350, count: 9, img: shopC1, pusrches: 1 },
  ]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    totalFunc();
  }, [total]);
  const totalFunc = () => {
    const sum = data.reduce((accumulator, data) => {
      return accumulator + data.price * data.pusrches;
    }, 0);  settotal(sum);
  };

  const buy = (obj) => {
    // console.log(obj.id);
    data.push(obj);
    let arr = [...new Set(data)];
    setdata(arr);
  };
  const add = (obj) => {
    let hanledata = [...data];
    hanledata = hanledata.map((e) => {
      if (e.id === obj.id) {
        if (e.count >= 1) {
          e.pusrches = e.pusrches + 1;
          e.count = e.count - 1;
        }
      }
      return e;
    });
    setdata(hanledata);
    totalFunc();
  };
  const dec = (obj) => {
    let hanledata = [...data];
    hanledata = hanledata.map((e) => {
      if (e.id === obj.id) {
        if (e.pusrches >= 2) {
          e.pusrches = e.pusrches - 1;
          e.count = e.count + 1;
        }
      }
      return e;
    });
    setdata(hanledata);
    totalFunc();
  };
  const remove = (obj) => {
    setdata((e) => e.filter((data) => data.id !== obj.id));
  };

  return (
    <div>
      <Navs data={data} />
      <Routes>
        <Route path="/" element={<Home myProducts={Products} />} />
        <Route
          path="/Shop"
          element={<Shop data myProducts={Products} buy={buy} />}
        />
        <Route
          path="/ShoppingCarD"
          element={
            <ShoppingCarD data={data} remove={remove} add={add} dec={dec} total={total} totalFunc={totalFunc} />
          }
        />
        <Route path="/Shop/ShoppingCarD.js" element={<ShoppingCarD />} />
        <Route path="/Navs/ShoppingCarD.js" element={<ShoppingCarD />} />
        <Route path="/Navs" element={<Navs />} />
      </Routes>
    </div>
  );
};
export default App;
