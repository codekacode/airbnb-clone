import { Button } from "@material-ui/core";
import { useState } from "react";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(true);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch you imagination</h1>
        <h5>
          Plan a different kind of gataway to uncover the hidden gems near you{" "}
        </h5>
        <Button variante="outlined">Explore Neraby</Button>
      </div>
    </div>
  );
}

export default Banner;
