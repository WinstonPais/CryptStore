import React, { Component } from 'react';
import './Footer.css';
import bitcoin from "../images/bitcoin.png";


class Footer extends Component {
    render() {
        return(
        <div className="footer">
            <div className="row">
                <div className="col-sm-2">
                    <h3 className="text1">CryptStore <img src={bitcoin} className="logo"></img></h3>
                </div>
                <div className="col-sm-2">
                    <h3 className="text2">Copyright ©2022 All rights reserved by CryptStore</h3>
                </div>
            </div>
        </div>   

        )
    }
}

export default Footer;