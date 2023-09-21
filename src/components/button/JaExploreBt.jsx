import React from "react";
import { useNavigate } from "react-router-dom";

function JaExplore({ buttonText }) {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/explore-app");
  };

  return (
    <button
      onClick={goToRegister}
      className="bg-ja-white flex  justify-center  py-2 px-1 rounded-lg border border-ja-red"
    >
      <span className=" text-ja-red font-bold ">{buttonText}</span>
    </button>
  );
}

export default JaExplore;
