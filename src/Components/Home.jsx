import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";
import texD from "./textd.css"
import Footer from "./Footer"


function Home() {
    useEffect(()=>
    { 
        window.scrollTo(0,0) 
    }, [])

  return (

    <div>
        
        <div className="slideshow">
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay showStatus={false} showIndicators={false}>
                <div>
                    <img src="/Momo/o.jpg" />
                </div>
                <div>
                    <img src="/Momo/open.jpg" />
                </div>
                <div>
                    <img src="/Momo/chickenplatter.jpg" />
                </div>
                <div>
                    <img src="/Momo/eggnoodles.jpg" />
                </div>
                <div>
                    <img src="/Momo/vegsteam.jpg" />
                </div>
                <div>
                    <img src="/Momo/vegkothey.jpg" />
                </div>
                <div>
                    <img src="/Momo/vegjhol.jpg" />
                </div>
                <div>
                    <img src="/Momo/n.jpg" />
                </div>
                <div>
                    <img src="/Momo/p.jpg" />
                </div>
                <div>
                    <img src="/Momo/vegtandoori.jpg" />
                </div>
                <div>
                    <img src="/Momo/u.jpg" />
                </div>
                <div>
                    <img src="/Momo/wontonmasala.jpg" />
                </div>
                <div>
                    <img src="/Momo/b.jpg" />
                </div>
                <div>
                    <img src="/Momo/friedwonton.jpg" />
                </div>
            </Carousel>
        </div>
        <div className="explore_h">
              <h1>EXPLORE MENU</h1>
        </div>
        <div className="explore">
              <Link to="/menu" className="option"><img src="/picsrc/tibetan.png"/></Link>
              <Link to="/menu" className="option"><img src="/picsrc/chinese.jpg"/></Link>            
        </div>
        <div className="hot_head">
            <h1>HOT SELLING ITEMS</h1>
        </div>
        <div className="hot">
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay showStatus={false} showIndicators={false}>
                <div className="slide">
                    <img src="/Momo/chickensteam.jpg" />
                    <p>OG CHICKEN STEAM MOMO</p>
                </div>
                <div className="slide">
                    <img src="/Momo/wontonmasala.jpg" />
                    <p>OG CHICKEN WONTON MASALA</p>
                </div>
                <div className="slide">
                    <img src="/Momo/paneerplatter.jpg" />
                    <p>OG PANEER MOMO PLATER</p>
                </div>
                <div className="slide">
                    <img src="/Momo/vegsteam.jpg" />
                    <p>OG VEG STEAM MOMO</p>
                </div>
                <div className="slide">
                    <img src="/Momo/open.jpg" />
                    <p>OG CHICKEN OPEN MOMO</p>
                </div>
                <div className="slide">
                    <img src="/Momo/friedwonton.jpg" />
                    <p>OG CHICKEN FRIED WONTON</p>
                </div>
                <div className="slide">
                    <img src="/Momo/vegjhol.jpg" />
                    <p>OG VEG JHOL MOMO</p>
                </div>
            </Carousel>
        </div>
       
        
        <div className="order">
            <h1>ORDER THROUGH</h1>
            <a href="https://www.zomato.com/ncr/og-momo-sushant-lok-gurgaon">
            <img className="zomato" src="/picsrc/zoma.png" alt="" />
            </a>
            {/* <hr /> */}
            <a href="https://www.swiggy.com/restaurants/og-momo-sushant-shopping-arcade-sushant-lok-gurgaon-610435">
            <img className="swiggy" src="/picsrc/swig.png" alt="" />
            </a>
        </div>
        <div className="banner">
            <img src="/picsrc/banner.png" alt="" />
        </div>
        <div className="map">
            <a href="https://goo.gl/maps/a5cVuadeZ9MZLwjT9">
                <img className="map_img"src="/picsrc/maps.png" alt="" />
            </a>
            <div className="loc_text">
                <p>G-14, SUSHANT SHOPPING ARCADE, SUSHANT LOK PHASE-1, GURUGRAM, HARYANA</p>
            </div>
        </div>
        
    </div>
  );
}

export default Home;