import React from 'react'
import classes from './card.module.css'

const card = (props) => {
  return (
    <div className={classes.card_container}>
      <div className={classes.card}>
          <div className={classes.imgBx}>
              <img className={classes.imageSize} src={props.Myimg} alt="img"/>
          </div>
          <div className={classes.contentBx}>
              <h2>{props.name}</h2>
              <a href={props.linkTo}>View Product</a>
          </div>
      </div>
  </div>
  )
}

export default card