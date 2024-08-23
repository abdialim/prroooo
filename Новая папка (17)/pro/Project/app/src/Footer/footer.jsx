import './footer.css'
import React from 'react';
import RectangleImage from './card/Rectangle 15.png';




const Footer = () => {
    return (
        <div className='footer'>
                <img className='img-th' src={RectangleImage} alt="Rectangle 15.png" />
            <div className='box'>
                <h1 className='h-f'>О магазине</h1>
                <p className='p-f'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.
                </p>
            </div>
            <div className='box2'>
                <h1 className='f-h'>Категории</h1>
                <button  className='buttons'><p className='button-p'>часы</p></button>
                <button className='buttons1'><p className='button-p1'>браслеты</p></button>
                <button className='buttons2'><p className='button-p2'>ремни</p></button>
                <br />
                <button className='buttons3'><p className='button-p3'>ювелирные изделия</p></button>
                <button className='buttons4'><p className="button-p4">запонки</p></button>
            </div>
            <div className='box3'>
                <h1 className='box-h'>Рaссылка</h1>
            <p className='box-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
            </div>
            <div className='box4'>
                <p className='p-box4'>© 2020 Все права защищены</p>
                <p className='p-box1'>Сделано Figma.info</p>
            </div>
        </div>
    );
}

export default Footer;
