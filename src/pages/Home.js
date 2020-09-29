import React from 'react'
import '../App.css';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';


function Home() {
    return (
        <div>
            <HeroSection/>
            <Cards/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
