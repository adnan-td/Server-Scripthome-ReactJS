import "./home.style.scss";
import { Link } from "react-router-dom";

import htunderline from "../../assets/Homepage/pattern/hero-section-underline.svg";
import htimg from "../../assets/Homepage/Image/banner.webp";
import trophy from "../../assets/Homepage/Image/trophy.png";
import hfright from "../../assets/Homepage/featured-section/iphone-mockup.png";
import hficon from "../../assets/Homepage/icons/Featured icon.png";
import hficon2 from "../../assets/Homepage/icons/Featured icon-2.png";
import hficon3 from "../../assets/Homepage/icons/Featured icon-3.png";
import mpsunderline from "../../assets/Homepage/pattern/most-popular-scribble.svg";
import ScriptCard from "../../components/script-card/script-card.component";
import Carousel2 from "../../components/carousel/carousel.component";
import arrow from "../../assets/Script/Icons/arrow-square-right.svg";
import downloadcloud from "../../assets/Homepage/icons/download-cloud-02.svg";
import FI from "../../components/floatingicon/fi.component";

export default function Home() {
  return (
    <div className="home">
      <FI />
      <div className="home-top">
        <div className="home-top-content">
          <h1>
            Automatically optimize your Roblox experience with scripts from
            <span>
              Scripthome
              <img alt="loading" src={htunderline} />
            </span>
          </h1>

          <div className="home-top-buttons">
            <Link className="styled-button" to="/scripts">
              <span>View Scripts</span>
              <img src={arrow} alt="arrow-icon" />
            </Link>
            <a href="https://krnl.place/" target="_blank" rel="noreferrer" className="secondary-button">
              <span>Download Executor</span>
              <img src={downloadcloud} alt="download-icon" />
            </a>
          </div>
        </div>
        <div className="ht-img-container">
          <img alt="loading" src={htimg} className="htimg" />
          <div className="ht-corner">
            <img alt="loading" src={trophy} />
            <p>#1 Roblox Script provider</p>
          </div>
        </div>
      </div>
      <div className="home-data">
        <div className="ht-data">
          <div className="ht-data-inside">
            <p className="ht-data-no">223</p>
            <p className="ht-data-name">Total scripts posted</p>
          </div>
          <div className="ht-data-inside">
            <p className="ht-data-no">35</p>
            <p className="ht-data-name">Total scripts this month</p>
          </div>
          <div className="ht-data-inside">
            <p className="ht-data-no">52044</p>
            <p className="ht-data-name">Total scripts views</p>
          </div>
          <div className="ht-data-inside">
            <p className="ht-data-no">22948</p>
            <p className="ht-data-name">Total scripts views this month</p>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="background-header">Features</div>
        <div className="hf-left">
          <div className="hf-top-content">
            <h3 className="hf-header">Why to choose us?</h3>
            <p className="hf-hp">Scripthome's mission is to provide scripts and help the players in making their roblox game journey pleasing to play through.</p>
          </div>
          <div className="hf-features-wrapper">
            <div className="hf-features">
              <img alt="loading" className="hficon" src={hficon} />
              <div className="hf-text">
                <h4 className="hf-subheader">Premium Roblox Scripts</h4>
                <p className="hf-subp">
                  Scripthome provides a huge collection of scripts for Roblox players. You can find everything from premium to free scripts on Scripthome.
                </p>
              </div>
            </div>
            <div className="hf-features">
              <img alt="loading" className="hficon-2" src={hficon2} />
              <div className="hf-text">
                <h4 className="hf-subheader">Daily New Uploads</h4>
                <p className="hf-subp">Our team are uploading new scripts everyday to keep you up to date for using it in your favourite games.</p>
              </div>
            </div>
            <div className="hf-features">
              <img alt="loading" className="hficon-3" src={hficon3} />
              <div className="hf-text">
                <h4 className="hf-subheader">Our Community</h4>
                <p className="hf-subp">Join the Scripthome community to get access to exclusive perks like getting notified whenever a new scripts uploads.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hf-right">
          <img alt="loading" src={hfright} />
        </div>
      </div>
      <div className="mps">
        <div className="mps-inside">
          <div className="mps-header">
            <p>
              Most Popular{" "}
              <span>
                Scripts <img alt="loading" src={mpsunderline} />
              </span>
            </p>
          </div>
          <Carousel2 />
        </div>
      </div>
      <div className="recentu">
        <div className="background-header">Uploads</div>
        <div className="recentu-top">
          <p>Recent Uploads</p>
          <Link className="styled-button" to="/scripts">
            <span>View all</span>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="recentu-bottom">
          <ScriptCard />
          <ScriptCard />
          <ScriptCard />
          <ScriptCard />
          <ScriptCard />
          <ScriptCard />
        </div>
      </div>
    </div>
  );
}
