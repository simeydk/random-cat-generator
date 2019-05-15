import React, { useState, useRef, Fragment } from "react";

function LoaderImg({
  src,
  alt,
  loadingComponent = "Loading...",
  onLoad: propOnLoad = () => null,
  style = {},
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const prevSrc = useRef(null); // store a copy of current source to detect changes

  if (src !== prevSrc.current) {
    prevSrc.current = src;
    setIsLoaded(false);
  }

  const onLoad = () => {
      setIsLoaded(true); // set IsLoaded state for this component
      propOnLoad(); // run any other onload provided
  };

  if (!isLoaded) style.display = "none";
  props = { ...props, src, onLoad, style };

  props.style = props.style || {};

  return (
    <Fragment>
      <img {...props} alt={alt} />
      {!isLoaded ? loadingComponent : null}
    </Fragment>
  );
}

export default LoaderImg;
