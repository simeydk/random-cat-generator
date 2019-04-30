import React, { useState, useRef, Fragment } from "react";

function LoaderImg({
  src = null,
  LoadingComponent = "Loading...",
  onLoad: propOnLoad = () => null,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const prevSrc = useRef(null);

  if (src !== prevSrc.current) {
    prevSrc.current = src;
    setIsLoaded(false);
  }

  const onLoad = () => {
    setIsLoaded(true); // set IsLoaded state for this component
    propOnLoad(); // run any other onload provided
  };

  props = {alt: "", ...props, src, onLoad}
   
  props.style = props.style || {}
  if(!isLoaded) props.style.display = "none"

  return (
    <Fragment>
      <img {...props} />
      {!isLoaded ? LoadingComponent : null}
    </Fragment>
  );
};

export default LoaderImg;