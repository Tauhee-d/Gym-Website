import React from "react";
import "./Testimonials.css";
import person from '../../Assets/images/person1.jpeg'

const Testimonials = () => {
  return (
    <div className="testimonials" id="Testimonials">
      <div className="left-t">
        <span>Testimonals</span>
        <span className="stroke-text"> what they</span>
        <span>say about us</span>
        <div className="review">
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            excepturi deleniti deserunt optio incidunt possimus magni ullam ex
            reprehenderit ipsum fugiat vel, quidem corrupti suscipit tempore
            obcaecati earum, sunt dignissimos odio aut neque consectetur laborum
            architecto! Veritatis dolorum aliquid quidem.
          </span>
          <span>
            - salman khan
          </span>
        </div>
      </div>

      <div className="right-t">
       
        <img src={person} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
