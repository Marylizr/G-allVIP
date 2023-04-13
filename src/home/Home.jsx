import React from 'react'
import Banner from '../banner/Banner'
import Contact from '../contact/Contact'
import Tours from '../tours/Tours'
import About from '../about/About'
import styles from '../home/home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <About />
      <Tours />
      <Contact />
    </div>
  )
}

export default Home