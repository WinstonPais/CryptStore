import React from "react";
import { Button, Layout } from "antd";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { useState } from "react";
import Rating from "../components/Rating";
import PriceRanges from "../components/PriceRanges";
import Results from "../components/Results";
import Cd from '../card/card.js';
import {books} from "../books.js";
import './Categories.css'

const { Sider, Content } = Layout;

const Categories = () => {
  const bookCategory = books["Comics"];
  const { state: category } = useLocation();
  const [rating, setRating] = useState(1);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);

  return (
    <>
      <div className="container">
        <Header />
        <div className="results-header">
          <span>Showing Poducts for </span>
          <span className="category">"{category}"</span>
        </div>

        <Layout>
          <div className="layout">
            {bookCategory.map((e,i) => {
              return (
                    <Cd Myimg={e.image} name={e.name} linkTo="/product" state={e} />
              );
            })}
          </div>
        </Layout>

        
      </div>
    </>
  );
};

export default Categories;
