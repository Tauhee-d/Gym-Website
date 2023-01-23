import React from "react";
import Header from "../../components/Header/Header";
import calories from '../../Assets/images/calories.png'
import heart1 from '../../Assets/images/hrt.png'
import img7 from '../../Assets/images/img.png'
import "./Home.css";
const Home = () => {
  return (
    <div className="home" id="Home">
      <div className="left">
        <Header />

        {/* ad line  */}
        <div className="ads-line">
          <div></div>
          <span>the best fitness club in our town</span>
        </div>

        {/* heading */}
        <div className="heading-txt">
          <div>
            <span className="stroke-text">Shape</span>
            <span> your</span>
              <span> ideal body</span>
          </div>
         
          <div>
              <span>
                It is a shame for a man to grow old without seeing the beauty
                and strength of which his body is capable. I desire only to know
                the truth, and to live as well as I can. And, to the utmost of
                my power, I exhort all other men to do the same.
              </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
            <div>
                <span>+140</span>
                <span>expert couches</span>
            </div>
            <div>
                <span>+1422</span>
                <span>members joined</span>
            </div>
            <div>
                <span>+50</span>
                <span>fitness programs</span>
            </div>
        </div>

        {/* button */}
        <div className="home-button">
            <button className="btn1">Get Started</button>
            <button className="btn">Learn More</button>
        </div>


      </div>

      <div className="right">
        <button className="btn">Join Now</button>
      <div className="heart-rate">
        <img src={heart1} alt=""  />
        <span>Heart Rate</span>
        <span>116 bpm</span>
      </div>

      {/* home images  */}
        <img src={img7} alt="" className="home-image" />
       {/* calories image  */}
       <div className="calories">
        <img src={calories} alt="" />
        <div>
        <span>Calories burned </span><br />
        <span className="num" >220 kcl</span>

        </div>
       </div>
        

      </div>
    </div>
  );
};

export default Home;
