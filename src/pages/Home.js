import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import NewCard from './../card/card';
// import Carousel1 from "../images/carousel1.png";
import Carousel2 from "../images/carousel2.png";
import Comics from "../images/comics.png";
import ArtemisFowl from "../images/ArtemisFowl.png";
import MobyDick from "../images/MobyDick.png";
import Adventure from "../images/adventure.png";
import Dictionaries from "../images/dictionaries.png";
import Fantasy from "../images/fantasy.png";
import Horror from "../images/horror.png";

const carousel = [Carousel2];
const catCard = [Adventure, Fantasy,Horror,Dictionaries];
const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className="carousel-img" alt="carousel"></img>;
    })}
    </Carousel>
    <div className="cards">  
      <NewCard Myimg={Comics} name="Comics Category" linkTo="/categories"/>
      <NewCard Myimg={Dictionaries} name="Dictionaries" linkTo="/categories"/>
      <NewCard Myimg={Horror} name="Horror" linkTo="/categories"/>
      <NewCard Myimg={Adventure} name="Shop By Category" linkTo="/categories"/>
    </div>
  </div>
  </>
)
}

export default Home;
