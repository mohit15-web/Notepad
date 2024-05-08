import React from "react";
import Home from "./Home";

function Preloader() {
    const handleClick = () => {
        <Home data={1}/>
        console.log("data sended");
    }
  return (
    <div>
      <div className="image flex justify-center flex-col gap-3 items-center">
        <h1 className="text-[3rem] font-bold tracking-wider">You have no notes</h1>
        <button className="button-18" role="button" onClick={handleClick}>
          Create one Now
        </button>
      </div>
    </div>
  );
}

export default Preloader;
