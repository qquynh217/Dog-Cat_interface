import banner from "@/assets/home-cat-dog.png";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <div className="home-page_inner">
        <img src={banner} alt="" className="banner" />
        <div className="title">
          <h1>Dog & Cat</h1>
          <p className="subtitle">Characteristics</p>
          <p className="description">
            Fully personalized design. But this time <br /> our persons are a
            little different
          </p>
          <div className="classification-button">
            <Link to="/classification" className="button">
              Go to classification
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
