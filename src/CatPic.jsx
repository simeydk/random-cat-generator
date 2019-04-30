import React, { useState, useEffect } from "react";
import { getCatUrl } from "./api";
import LoaderImg from "./LoaderImg";
import Spinner from "./Spinner";

import "./cats.css";

const CatPic = () => {
  const [url, setUrl] = useState(null);

  const getNewCat = async () => {
    const url = await getCatUrl();
    setUrl(url);
  };

  // get a cat on mount (like ComponentDidMount)
  useEffect(getNewCat, []);

    return (
    <div id="catContainer">
      <LoaderImg
        src={url}
        LoadingComponent={<Spinner />}
        className="catImage catImage--visible"
      />
      <button autoFocus className="newCatButton" onClick={getNewCat}>
        New Cat
      </button>
    </div>
  );
};

export default CatPic;
