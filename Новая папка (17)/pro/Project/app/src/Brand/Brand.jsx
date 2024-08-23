import ".//Brand.css"
import rectangleImage from './carts/Rectangle.png';


import React from 'react';

const Brand = () => {
    return (

        <div className="box">
            <div className="nox">
                <div className="boolx">
                <h1 className="nox-h">наши бренды</h1>
                <hr class="centered-line" />
                </div>
                <div className="wrap">
                   <img className="img" src={rectangleImage} alt="Rectangle" />
                   <img className="img" src={rectangleImage} alt="Rectangle" />
                   <img className="img" src={rectangleImage} alt="Rectangle" />
                   <img className="img" src={rectangleImage} alt="Rectangle" />
                   </div>
            </div>
        </div>
    );
}

export default Brand;
