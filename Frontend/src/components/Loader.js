import React from 'react'
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <>
    <div className="sweet-loading">
      <HashLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </>
  )
}

export default Loader
