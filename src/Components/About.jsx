import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./About.css"
import { useEffect } from "react";


function About() {
    useEffect(()=>
    { 
        window.scrollTo(0,0) 
    }, [])
    return (
        <div className="whole">
            <h1 className="heading">OUR STORY</h1>
            <div className="para">
                <p>Momos are a beloved and delectable culinary delight that has captured the hearts and taste buds of people across the Himalayan regions and beyond. 
                    These delightful dumplings, believed to have originated in Tibetan cuisine, have found their way into the cultural fabric of countries like Nepal, Bhutan, and India. 
                    Momo lovers are drawn to their enticing aroma and the tantalizing flavors hidden within the delicate dough. 
                    Filled with a variety of savory fillings, such as minced meat, vegetables, or cheese, momos are carefully folded and steamed or fried to perfection. 
                    They are often served with a side of spicy chili sauce or a fragrant broth, adding an extra layer of zing to the culinary experience. 
                    Whether enjoyed as street food or savored in cozy restaurants, momos have become a symbol of communal gatherings, cultural diversity, and the joy of sharing a delightful meal.
                </p>
                <div className="ingredients_slideshow">
                    
                    <Carousel showThumbs={false} infiniteLoop={true} autoPlay showStatus={false} showIndicators={false} swipeable={true}>
                        <div>
                            <img src="/images/one.jpg" />
                            <h1>Savor the crispness and vibrant flavors of our hand-picked, farm-fresh veggies, bringing a burst of goodness to your plate</h1>
                        </div>
                        <div>
                            <img src="/images/two.jpg" />
                            <h1>Indulge in a colorful medley of freshly chopped vegetables, perfectly combined to create a symphony of flavors and textures</h1>
                        </div>
                        <div>
                            <img src="/images/three.jpg" />
                            <h1>Our momo filling is a delectable fusion of savory ingredients, meticulously crafted to deliver a burst of flavors with every bite</h1>
                        </div>
                        <div>
                            <img src="/images/four.jpg" />
                            <h1>Our momo designs are a true work of art, showcasing intricate folds and pleats that encase the mouthwatering filling, making each bite a visual and gastronomic delight</h1>
                        </div>
                        <div>
                            <img src="/images/five.jpg" />
                            <h1>Our momo maida is expertly crafted to achieve the perfect balance of softness and elasticity, ensuring that each bite of our momos has a delightful texture that melts in your mouth</h1>
                        </div>
                        <div>
                            <img src="/images/six.jpg" />
                            <h1>Discover the secret behind perfectly steamed momos with our premium-grade momo steamer maida, designed to facilitate optimal heat distribution and create irresistibly soft and juicy dumplings</h1>
                        </div>
                        <div>
                            <img src="/images/seven.jpg" />
                            <h1>Indulge in the sheer juiciness of our momos, as each bite unleashes a burst of savory flavors, accompanied by a tantalizing explosion of succulent fillings</h1>
                        </div>
                        <div>
                            <img src="/images/eight.jpg" />
                            <h1>Get ready to spice up your palate with our sizzling chilly fire momos, where the perfect balance of fiery spices and tantalizing fillings create an unforgettable culinary adventure</h1>
                        </div>
                        <div>
                            <img src="/images/nine.jpg" />
                            <h1>Experience the unparalleled quality of our homemade paneer, carefully prepared in our kitchen to bring you the authentic taste and delicate freshness that will elevate your culinary creations to new heights</h1>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="skills">
                <div className="dev_dis">
                    <p>DEVELOPED BY SAHITYA GUPTA</p>
                    <a href="https://instagram.com/s.ahi.tya?igshid=Y2IzZGU1MTFhOQ==">
                    <img className= "div_instagram" src="/picsrc/instagram.png" alt="" />
                    </a>
                    <a href="https://www.threads.net/@s.ahi.tya">
                        <img  className="div_thread" src="/picsrc/thread.webp" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/guptasahitya/">
                        <img  className="div_linkedin" src="/picsrc/linkedin.png" alt="" />
                    </a>


                    <p>DESIGNED BY BHOOMIKA JAIN</p>
                    <a href="https://instagram.com/__j.bhoomika__?igshid=Y2IzZGU1MTFhOQ==">
                    <img className= "div_instagram" src="/picsrc/instagram.png" alt="" />
                    </a>
                    <a href="https://www.threads.net/@__j.bhoomika__">
                        <img  className="div_thread" src="/picsrc/thread.webp" alt="" />
                    </a>
                </div>
            </div>
            
        </div>
    );
  }

export default About;