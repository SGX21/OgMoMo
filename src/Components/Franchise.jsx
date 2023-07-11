import React from "react";
import { useEffect, useState} from "react";
import "./Franchise.css"

function Franchise() {
  useEffect(()=>
  { 
      window.scrollTo(0,0) 
  }, [])



  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };


 const submitData = async (event) => {
    event.preventDefault();
    const {name,email,phone,text} = userData;
    if(name && email && text  && phone)
    {
          const res = await fetch(
            "https://franchisee-9a78e-default-rtdb.firebaseio.com/franchiseRecord.json",
                {
                  method : "POST",
                  headers: {
                    "Content-Type" : "application/json",
                  },
                  body : JSON.stringify({name, email, phone, text})
                }
            )
            console.log(res)
            

            if (res){
              setUserData({
                name: "",
                email: "",
                phone: "",
                text: "",
              })
              alert("Thank you for getting in touch with us. We will connect will you shortly")
            }
            else{
              alert("Something went wrong, Please try again")
            }
    }
    else{
      alert("Please fill the nessecary field before submitting")
    }
}
    return (
      <div className="actucal">
        <div className="why">
              <h1>WHY OG MOMO ?</h1>
              <p1>Join with most loved MoMo brand with 4.5 rating on Zomato & Swiggy.</p1>
              <h2>QUALITY FOOD</h2>
              <p2>Experience momos at their finest, 
              as our skilled chefs pour their passion 
              and expertise into creating each delectable piece, 
              resulting in a symphony of taste and quality.</p2>
              <h2>FRANCHISEE</h2>
              <p2>OG MOMO has started providing franchisees with a proven business model with innovation and growth at its core.</p2>
        </div>
        <img src="/picsrc/banner.png" alt="" />
        <div className="fr_form">
          <form className="one" method="POST">
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
                <label htmlFor="email">YOUR PHONE NUMBER</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange={postUserData}
                />
              </div>
              <div>
                <label htmlFor="text">EXPLAIN WHY OG MOMO ?</label>
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
    );
  }

export default Franchise;