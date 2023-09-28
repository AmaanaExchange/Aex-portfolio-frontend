import React from "react";
import image from "../../assets/images/image.svg"
import rocket from "../../assets/images/rocket.png"
import heart from "../../assets/images/heart.png"
import hamer from "../../assets/images/hammer.png"

const CommingSoon = () => {
  return (
    <div>
      <div className="alert">
        <div className="d-flex">
          <span className="linear-heading"> Sorry we’re still building </span>
          <span className="icon"><img width={"35px"} src={hamer} alt="" /> </span>
        </div>
        <div className="my-4 d-flex">
          <span className="linear-heading"> Come back in a bit </span>{" "}
          <span className="icon"><img width={"35px"} src={heart} alt="" /> </span>
        </div>
        <div className="my-3">
          <span className="linear-heading ">
            {" "}
            Because we’re changing the way things are done!{" "}
          </span>
          <span className="icon"><img width={"30px"} src={rocket} alt="" /> <img width={"30px"} src={image} alt="" /></span>
          
        </div>

        <div className="mt-5 mb-5">
          <b className="linear-text"> Sincerely,</b>
        </div>
        <div>
          <span className="linear-text"> Amaana Exchange Team</span>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
