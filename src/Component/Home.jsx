import React from "react";
import vg from "../assets/profile.jpg";
import "../Styles/Home.scss";
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"; 
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>az developers</h1>
          <p>solution to all your problems</p>
        </main>
      </div>
      <div class="secondpage">
        <div className="home2">
          <img src={vg}></img>
          <div>
            <p>
              we are your one and only solution<br></br> to all your problems we
              are leading <br></br>tech company with cheapest prices
            </p>
          </div>
        </div>
      </div>
      <div className="thirdpage" id="about">
      <div className="home3">
          <div>
            <h1><strike>who i am</strike> </h1>
            <h1>who we are</h1>
            <p>
              # developers  
            </p> 
          </div>
      </div>
      </div>
      <div className="fourthpage">
        <div className="home5">
          <h1>the developers </h1>
          <article>
            <div style={{animationDelay:"0.5s"}}>
              <img src={vg}></img>
              <p>google</p>
            </div>
            <div style={{animationDelay:"0.8s"}}>
            <img src={vg}></img>
              <p>amazon</p>
            </div>
            <div style={{animationDelay:"0.11s"}}>
            <img src={vg}></img>
              <p>instagram</p>
            </div>
            <div style={{animationDelay:"0.14s"}}>
            <img src={vg}></img>
              <p>youtube</p>
            </div>
          </article>
        </div>
      </div>
      <div className="fourthpage" id="follow">
        <div className="home4">
          <h1>follow us </h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillInstagram/>
              <p>instagram</p>
            </div>
            <div style={{animationDelay:"0.9s"}}>
              <AiFillYoutube/>
              <p>youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
