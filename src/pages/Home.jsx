import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/ChickenFeast.png'
import '../styles/HomeStyles.css'

const Home = () => {
    return (
        <Layout>
            <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
                <div className="overlay">
                    <div className='headerContainer'>

                        <h1>
                          Welcome to <br />
                          <span className="brand">Chicken Point</span>
                        </h1>

                        <p>Best Chicken in Delhi</p>

                        <Link to={"/menu"}>
                            <button>EXPLORE MENU</button>
                        </Link>

                        {/* Zomato Order Button */}
                        <a
                            href="https://www.zomato.com/ncr/chicken-point-1-karawal-nagar-new-delhi/order"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="orderBtn">ORDER NOW</button>
                        </a>

                        {/* Delivery Note */}
                        <div className="deliveryNote">
                            🚚 Free Home Delivery upto 1 KM | Minimum Order ₹250 |
                            <a href="tel:9711893786"> Call: 9711893786</a>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home