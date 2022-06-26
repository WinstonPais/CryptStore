import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";
import { Carousel, Card } from 'antd';
import NewCard from './../card/card';
// import Carousel1 from "../images/carousel1.png";
// import Carousel2 from "../images/carousel2.png";
import Comics from "../images/comics.png";
import ArtemisFowl from "../images/ArtemisFowl.png";
import MobyDick from "../images/MobyDick.png";
import fitness from "../images/fitness.jpg";
import Fiction from "../images/fiction.png";
// import Fantasy from "../images/fantasy.png";
import Horror from "../images/hor.jpg";


import Fantasy from "../images/fantasy.jpg";
import Travel from "../images/travel.jpg";
import Sci_fi from "../images/sci_fi.jpg";
import History from "../images/history.jpg";


// const carousel = [Carousel2];
const catCard = [fitness, Fantasy,Horror,Fiction];
const Home = () => {

return(
  <>
  <div className="container">
    <Header/>
    <div className="cards">  
      <NewCard Myimg={Comics} name="Comics Category" linkTo="/categories"/>
      <NewCard Myimg={Fiction} name="Fiction" linkTo="/categories"/>
      <NewCard Myimg={Horror} name="Horror" linkTo="/categories"/>
      <NewCard Myimg={fitness} name="Health and Fitness" linkTo="/categories"/>
    </div>
    <div className="cards">  
      <NewCard Myimg={Fantasy} name="Fantasy" linkTo="/categories"/>
      <NewCard Myimg={Travel} name="Travel" linkTo="/categories"/>
      <NewCard Myimg={Sci_fi} name="Science Fiction" linkTo="/categories"/>
      <NewCard Myimg={History} name="History" linkTo="/categories"/>
    </div>
  </div>
  </>
)
}

export default Home;
