import React, { useState, useEffect } from "react";
import { getCatUrl } from "./api";
import LoaderImg from "./LoaderImg";
import Spinner from "./Spinner";
import "./cats.css";

const imageCache = [];

const cacheImage = src => {
  const img = new Image();
  img.src = src;
  imageCache.push(src);
};

const cacheCat = async (n = 1) => {
  for (let i = 0; i < n; i++) {
    cacheImage(await getCatUrl());
  }
};

// cacheCat(5);

const CatPic = () => {
  const [url, setUrl] = useState(null);

  const getNewCat = async () => {
    const url = imageCache.length > 0 ? imageCache.shift() : await getCatUrl(); // get a cached image
    setUrl(url);
    cacheCat(); // que a new cat to be cached
  };

  // get a cat on mount (like ComponentDidMount)
  useEffect(() => {
    getNewCat();
    cacheCat(5);
  }, []);

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
