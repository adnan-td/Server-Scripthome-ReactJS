import "./carousel.style.scss";

import eyeicon from "../../assets/Script/Icons/eye.svg";
import hearticon from "../../assets/Homepage/icons/heart-icon.svg";
import cardimg from "../../assets/Homepage/Image/caro-img.jpg";

import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

export default function Carousel2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    // <div className="carousel2">
    //   <button style={{ margin: "0 20px 0 -30px" }}>
    //     <i className="fa-solid fa-angles-left"></i>
    //   </button>
    //   <div className="card-container">
    //     <CarouselCard />
    //     <CarouselCard />
    //   </div>
    //   <button style={{ margin: "0 -30px 0 20px" }}>
    //     <i className="fa-solid fa-angles-right"></i>
    //   </button>
    // </div>

    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} indicators={false} prevLabel={null} nextLabel={null} interval={null}>
      <Carousel.Item>
        <div className="carousel2">
          <div className="card-container">
            <CarouselCard />
            <CarouselCard />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel2">
          <div className="card-container">
            <CarouselCard />
            <CarouselCard />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel2">
          <div className="card-container">
            <CarouselCard />
            <CarouselCard />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

const CarouselCard = () => {
  return (
    <div className="carousel-card">
      <img alt="loading" src={cardimg} className="cc-img" />
      <div className="card-content">
        <div className="card-content-header">
          <h4>Strong Simulator X Script...</h4>
          <p>Use Strong Simulator X Script now to train your character like...</p>
        </div>
        <div className="lav-c">
          <div className="lav-container">
            <div className="lav-img-c">
              <img alt="loading" src={eyeicon} />
            </div>
            <div className="lav-inner-c">
              <h5>8,230</h5>
              <p>views</p>
            </div>
          </div>
          <div className="lav-container">
            <div className="lav-img-c">
              <img alt="loading" src={hearticon} />
            </div>
            <div className="lav-inner-c">
              <h5>345</h5>
              <p>likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
