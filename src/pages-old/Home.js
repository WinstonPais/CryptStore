import React from 'react'
import Header from "../components-old/Header"
import Products from '../components-old/Products'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.bg}>
        <Header />
        <Products />
    </div>
  )
}

export default Home;