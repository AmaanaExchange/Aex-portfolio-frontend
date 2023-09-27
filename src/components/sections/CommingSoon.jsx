import React from "react";

const CommingSoon = () => {
  return (
    <div>
      <div className="alert">
        <div className="d-flex">
          <span className="linear-heading"> Sorry we’re still building </span>
          <h1 className="icon">🛠️</h1>
        </div>
        <div className="my-3 d-flex">
          <span className="linear-heading"> Come back in a bit </span>{" "}
          <h1 className="icon">🤍️</h1>
        </div>
        <div >
          <span className="linear-heading d-flex">
            {" "}
            Because we’re changing the way things are done!{" "}
          </span>
          <h1 className="icon">🚀</h1>
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
