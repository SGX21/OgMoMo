import React from "react";
import "./Menu.css"
import { useEffect } from "react";


function Menu() {

    useEffect(()=>
    { 
        window.scrollTo(0,0) 
    }, [])
    return (
      <div className="menu">
            <div className="tibetan">
                <h1>OG TIBETAN</h1>
                <div className="veg">
                    <h3>VEG</h3>
                    <div className="cards">
                        <div className="card">
                            <img src="/Momo/vegsteam.jpg" alt="" />
                            <h2>STEAMED MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegkothey.jpg" alt="" />
                            <h2>KOTHEY MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegjhol.jpg" alt="" />
                            <h2>JHOL MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/paneerchilli.jpg" alt="" />
                            <h2>CHILLI MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegfried.jpg" alt="" />
                            <h2>FRIED MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/wontonmasala.jpg" alt="" />
                            <h2>WONTON MASALA</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/friedwonton.jpg" alt="" />
                            <h2>FRIED WONTON</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/open.jpg" alt="" />
                            <h2>OPEN MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/chickencrispy.jpg" alt="" />
                            <h2>CRISPY MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegtandoori.jpg" alt="" />
                            <h2>TANDOORI MOMO</h2>
                        </div>
                    </div>
                </div>

                <div className="paneer">
                    <h3>PANEER</h3>
                    <div className="cards">
                        <div className="card">
                            <img src="/Momo/paneersteam.jpg" alt="" />
                            <h2>STEAMED MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/paneerkothey.jpg" alt="" />
                            <h2>KOTHEY MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegjhol.jpg" alt="" />
                            <h2>JHOL MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegfried.jpg" alt="" />
                            <h2>FRIED MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/paneerchilli.jpg" alt="" />
                            <h2>CHILLI MOMO</h2>
                        </div>
                    </div>
                </div>
                
                <div className="nonveg">
                    <h3>CHICKEN</h3>
                    <div className="cards">
                        <div className="card">
                            <img src="/Momo/chickensteam.jpg" alt="" />
                            <h2>STEAMED MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegkothey.jpg" alt="" />
                            <h2>KOTHEY MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/paneerchilli.jpg" alt="" />
                            <h2>CHILLI MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegjhol.jpg" alt="" />
                            <h2>JHOL MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/chickenfried.jpg" alt="" />
                            <h2>FRIED MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/wontonmasala.jpg" alt="" />
                            <h2>WONTON MASALA</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/friedwonton.jpg" alt="" />
                            <h2>FRIED WONTON</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/open.jpg" alt="" />
                            <h2>OPEN MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/chickencrispy.jpg" alt="" />
                            <h2>CRISPY MOMO</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegtandoori.jpg" alt="" />
                            <h2>TANDOORI MOMO</h2>
                        </div>
                    </div>
                </div>

                <div className="platter">
                    <h3>PLATERS</h3>
                    <div className="cards">
                        <div className="card">
                            <img src="/Momo/paneerplatter.jpg" alt="" />
                            <h2>VEG MOMO PLATTER</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/paneerplatter.jpg" alt="" />
                            <h2>PANEER MOMO PLATTER</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/chickenplatter.jpg" alt="" />
                            <h2>CHICKEN MOMO PLATTER</h2>
                        </div>
                    </div>
                </div>

                <div className="chinese">
                <h1>OG CHINESE</h1>
                <div className="all">
                    {/* <h3>ALL</h3> */}
                    <div className="cards">
                        <div className="card">
                            <img src="/Momo/vegnoodles.jpg" alt="" />
                            <h2>VEG NOODLES</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/eggnoodles.jpg" alt="" />
                            <h2>EGG NOODLES</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/vegnoodles.jpg" alt="" />
                            <h2>CHICKEN NOODLES</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/chisz.jpg" alt="" />
                            <h2>SIZZLING CHILLI CHICKEN</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/pandelight.jpg" alt="" />
                            <h2>CHILLI PANEER DELIGHT</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/honeychill.jpg" alt="" />
                            <h2>HONEY CHILLI POTATOES</h2>
                        </div>
                        <div className="card">
                            <img src="/Momo/dang.jpg" alt="" />
                            <h2>DANGLING CHILLI POTATOES</h2>
                        </div>
                    </div>
                </div>
                </div>
            </div>
      </div>
    );
  }

export default Menu;