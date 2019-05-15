import React, { useState } from "react";
import { getCatPhoto } from "./api";
import useRefresh from './useRefresh'
import Spinner from "./Spinner";

import "./cats.css";

function CatPicture() {
  const getCatUrl = async () => (await getCatPhoto())[0].url 
  const [catImage, refreshCatImage] = useRefresh(getCatUrl)
  const [loading, setLoading] = useState(true)

  async function getCatPicture() {
    setLoading(true);
    refreshCatImage();
  };

  function handleOnLoad() {
    setLoading(false)
  }

  return (
    <React.Fragment>
      <div id="catContainer">
        <img
          src={catImage}
          onLoad={handleOnLoad}
          alt="Cat"
          className={"catImage" + (!loading ? " catImage--visible" : "")}
        />
        {loading && <Spinner />}
        <button className="newCatButton" onClick={getCatPicture}>
          New cat
        </button>
      </div>
    </React.Fragment>
  );
}

export default CatPicture;
