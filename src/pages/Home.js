import React from 'react'
import Layout from '../component/layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner.jpeg'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Fooding Website</h1>
          <p>Best food in Pakistan</p>
          <Link to='/menu'>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
