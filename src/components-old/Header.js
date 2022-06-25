import React from 'react'
import styles from './Header.module.css'
import { useMoralis } from "react-moralis";


const Header = () => {
    const style1 = {backgroundColor: '#610094'};
    const style2 = {color: 'white'};
    const { authenticate, account } = useMoralis();
    
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>CrypStore</h1>
        <div className={styles.loginButtonContainer}>
            <a href="#" class="btn btn-dark" style={{...style1,...style2}} onClick={() => authenticate()}>
          {account ? <span>{account.slice(0,5)}...</span> : <span>Login to MetaMask</span>}</a>
        </div>
    </div>
  )
}

export default Header