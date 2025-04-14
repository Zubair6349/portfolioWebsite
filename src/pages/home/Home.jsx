import React from 'react';
import './home.css';
import Profile from "../../assets/home.jpg"
import { Link } from "react-router";
import { RiArrowRightLine } from "react-icons/ri";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const [text] = useTypewriter({
        words: ['Front-End Developer', 'Graphic Designer', 'Video Editor'],
        loop: 0,
        typeSpeed: 70,
        delaySpeed: 1500,
    });


    return (
        <section className="home-container grid">
            <img src={Profile} alt="image" className="home-img" />

            <div className="home-content">
                <h1 className='home-title'>
                    <span className='specific-header'>I'm Zubair Ahmed</span> <br />
                    <span className='specific-header'>{text}</span>
                    <Cursor cursorStyle='|' cursorBlinking={true} cursorColor='#fff' />
                </h1>

                <p className="home-description">
                    I'm Zubair Ahmed — a seasoned creative professional with over 5 years of experience in video editing and graphic design. Throughout my career, I’ve built a strong foundation in visual storytelling, consistently delivering impactful, high-quality work that builds trust and brings client visions to life.
                    <br />
                    I’ve expanded my creative journey into front-end development, combining my design sensibility with modern web technologies to craft responsive, intuitive, and engaging digital experiences. With a mindset rooted in growth and excellence, I now merge design and code to build interfaces that not only look good but feel right. I believe in quality over quantity, and I dedicate each day to refining my craft — whether it's through motion, color, or clean, elegant code.
                </p>

                <Link to="/about" className='button'>More About Me
                    <span className="button-icon">
                        <RiArrowRightLine />
                    </span>
                </Link>

            </div>

            <div className="color-block"></div>
        </section>
    );
};

export default Home;