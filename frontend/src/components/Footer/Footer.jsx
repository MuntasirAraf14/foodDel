import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Delicious meals, delivered to your doorstep! At [Your Brand Name], we bring you the best restaurants and freshest ingredients, ensuring a delightful dining experience anytime, anywhere. Enjoy fast delivery, exciting offers, and a variety of cuisines at your fingertips. Order now and savor the flavors of convenience!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In TOUCH</h2>
                <ul>
                    <li>Address: 123 Main Street, City, State, Country</li>
                    <li>Phone: +1 (123) 456-7890</li>
                    <li>Email: 6lC8B@example.com</li>   
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className='footer-copyright'>&copy; 2025 [Your Brand Name]. All rights reserved.</p>
    </div>
  )
}

export default Footer