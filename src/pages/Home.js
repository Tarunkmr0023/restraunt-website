import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/Background.jpg'
import '../styles/HomeStyles.css'

const Home = () => {
    return (
        <Layout>
            <div className='home' style={{ backgroundImage: `url(${Banner})` }}>
                <div className='headerContainer'>
                    <h1>Welcome to Chicken Point</h1>
                    <p>Best Chicken In Delhi</p>
                    <Link to={"/menu"}>
                        <button>EXPLORE MENU</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Home