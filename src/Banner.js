import { Button } from "@material-ui/core";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__search">
        <Button className="banner__searchButton" variant="outlined">
          Search Dates
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
