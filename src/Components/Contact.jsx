import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };


 const submitData = async (event) => {
    event.preventDefault();
    const {name,email,text} = userData;
    if(name && email && text)
    {
          const res = await fetch(
                "https://contactus-ad1b5-default-rtdb.firebaseio.com/contactUsRecords.json",
                {
                  method : "POST",
                  headers: {
                    "Content-Type" : "application/json",
                  },
                  body : JSON.stringify({name, email, text})
                }
            )
            console.log(res)
            

            if (res){
              setUserData({
                name: "",
                email: "",
                text: "",
              })
              alert("Thank you for getting in touch with us.")
            }
            else{
              alert("Something went wrong, Please try again")
            }
    }
    else{
      alert("Please fill the nessecary field before submitting")
    }
 };

  return (
    <div className="container1">
      <h1 className="heading">GET IN TOUCH WITH US</h1>
      <div className="container2">
        <div className="left">
          <div className="Phone">
            <img src="/picsrc/phone.png" alt="" />
            <h1>+91-8375018935</h1>
          </div>

          <div className="Mail">
            <img src="/picsrc/mail.png" alt="" />
            <h1>SHRINKHAL@LIVE.COM</h1>
          </div>
          <a href="https://www.google.com/maps/place/OG+MoMo/@28.4608216,77.0782089,18.95z/data=!3m1!5s0x390d18f18f191677:0xc44ac01b83cf6863!4m6!3m5!1s0x390d19f208c88313:0x6fbc7568f72156f4!8m2!3d28.4607515!4d77.0794755!16s%2Fg%2F11td0sv35g?entry=ttu">
            {" "}
            <div className="Location">
              <img src="/picsrc/location.png" alt="" />
              <h1>GURUGRAM, HARYANA</h1>
            </div>{" "}
          </a>
        </div>
        <hr />
        <div className="right">
          <form className="main" method="POST">
            <div>
              <label htmlFor="name">YOUR NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={postUserData}
              />
            </div>
            <div>
              <label htmlFor="email">YOUR EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                value={userData.email}
                onChange={postUserData}
              />
            </div>
            <div>
              <label htmlFor="text">YOUR MESSAGE</label>
              <textarea
                id="text"
                name="text"
                value={userData.text}
                onChange={postUserData}
              ></textarea>
            </div>
            <div>
              <button 
              className="btn" 
              type="submit" 
              onClick={submitData}>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
