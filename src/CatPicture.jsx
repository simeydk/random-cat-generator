import React from "react";
import { getCatPhoto } from "./api";
import useRefresh from './useRefresh'
import Spinner from "./Spinner";
import LoaderImg from "./LoaderImg"

import "./cats.css";

function CatPicture() {
  const getCatUrl = async () => (await getCatPhoto())[0].url 
  const [catImage, refreshCatImage] = useRefresh(getCatUrl)

  return (
    <React.Fragment>
      <div id="catContainer">
        <LoaderImg
          src={catImage}
          alt="Cat"
          className="catImage catImage--visible"
          loadingComponent={<Spinner/>}
        />
        <button className="newCatButton" onClick={refreshCatImage}>
          New cat
        </button>
      </div>
    </React.Fragment>
  );
}

export default CatPicture;
