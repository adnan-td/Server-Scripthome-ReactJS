import "./scripts.style.scss";
import ScriptPreview from "../../components/script-preview/preview.component";
import Tabs from "../../components/tabs/tabs.component";
import Panel from "../../components/tabs/panel.component";
import mainImage from "../../assets/Script/Image/Main-image.jpg";
import author1 from "../../assets/Script/Avatars/avatar2.png";
import author2 from "../../assets/Script/Avatars/avatar.png";
import arrow from "../../assets/Script/Icons/arrow-square-right.svg";
import Background from "../../components/background/background.component";
import FeaturedTag from "../../components/featuredtag/featuredtag.component";
import eye from "../../assets/Script/Icons/eye.svg";
import CommentButton from "../../assets/Script/Icons/comment-button.svg";
import GameButton from "../../assets/Script/Icons/game-link-icon.svg";
import ReportScriptIcon from "../../assets/Script/Icons/report-script-flag.svg";
import YoutubeIcon from "../../assets/Script/Icons/youtube.svg";
import calendaricon from "../../assets/Script/Icons/calendar.svg";
import FI from "../../components/floatingicon/fi.component"

const Scripts = () => {
  return (
    <div className="scripts-main">
      <FI />
      <Background />
      <div className="scripts-left">
        <div className="scripts-left-content">
          <div className="script-top-div">
            <a href=" " className="scripts-like">
              <p>
                <a href=" ">
                  <svg
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 9.48C1.5 5.97111 4.15774 2 8.38889 2C10.2159 2 11.5661 2.7105 12.5 3.51082C13.4339 2.7105 14.7841 2 16.6111 2C20.8423 2 23.5 5.97111 23.5 9.48C23.5 11.3254 22.7854 13.0297 21.793 14.5091C20.7998 15.9897 19.4924 17.2999 18.2111 18.3798C16.9261 19.4629 15.6397 20.3372 14.6636 20.9411C14.1749 21.2435 13.7596 21.4807 13.4558 21.6447C13.3047 21.7263 13.1762 21.7924 13.0771 21.8404C13.0289 21.8637 12.9787 21.8871 12.9319 21.9068C12.9098 21.9161 12.8759 21.9299 12.8368 21.9431C12.8177 21.9496 12.7854 21.9601 12.7456 21.9699C12.7202 21.9762 12.6237 22 12.5 22C12.3763 22 12.2805 21.9763 12.2551 21.9701C12.2153 21.9602 12.1823 21.9496 12.1632 21.9431C12.1241 21.9299 12.0902 21.9161 12.0681 21.9068C12.0213 21.8871 11.9711 21.8637 11.9229 21.8404C11.8238 21.7924 11.6953 21.7263 11.5442 21.6447C11.2404 21.4807 10.8251 21.2435 10.3364 20.9411C9.36027 20.3372 8.07395 19.4629 6.78889 18.3798C5.50758 17.2999 4.20022 15.9897 3.20703 14.5091C2.21464 13.0297 1.5 11.3254 1.5 9.48Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </p>
              <p>Like</p>
            </a>
            <div className="scripts-img">
              <img src={mainImage} alt="loading" />
            </div>
          </div>
          <div className="top-content-div">
            <div className="view_title_div">
              <div className="top_div_part">
                <div className="user-views">
                  <img src={eye} alt="loading" /> <span>1024 views</span>
                </div>
                <div className="user-views">
                  <img src={calendaricon} alt="loading" />{" "}
                  <span>22/08/2022</span>
                </div>
              </div>
              <h2>Thief Simulator Script | Auto Rob NPC, Make Money Fast</h2>
            </div>
            <div className="scripts-left-buttons">
              <button className="styled-button">
                <span>Get Script</span>
                <img src={arrow} alt="Get Script Button" />
              </button>
              <button className="game-link">
                <span>Game Link</span>
                <img src={GameButton} alt="Game Link Button" />
              </button>
              <button className="watch-video">
                <span>Watch Video</span>
                <img src={YoutubeIcon} alt="Youtube Button" />
              </button>
              <button className="report-script">
                <span>Report Script</span>
                <img src={ReportScriptIcon} alt="Report Script Button" />
              </button>
            </div>
            <div className="authorbox">
              <div className="leftauthor">
                <p className="madeby">Made by</p>
                <br />
                <div className="authorboxc1">
                  <img
                    src={author1}
                    alt="author1_image"
                    className="authorimage1"
                  />
                  <div className="authorboxc2">
                    <h4 className="contentauthor1">Alkeides Prudence</h4>
                    <p className="lighttext">Script Developer</p>
                  </div>
                </div>
              </div>
              <div className="rightauthor">
                <p className="uploadby">Uploaded by</p>
                <br />
                <div className="authorboxc1 authorboxc12">
                  <img
                    src={author2}
                    alt="author2_image"
                    className="authorimage2"
                  />
                  <div className="authorboxc2 authorboxc3">
                    <h4 className="contentauthor1">Issac Goma</h4>
                    <p className="lighttext">25+ Scripts Uploaded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs>
            <Panel title="Description">
              <p className="panel1">
                This new script for Thief Simulator allows you to make quite a
                good amount of money in no time. The script will basically loop
                teleport you to robbable players and automatically steal their
                money. Pretty insane, make sure to check it out!
              </p>
            </Panel>
            <Panel title="Features">
              <div className="featured-tags">
                <p className="ft-header">Featured Tags</p>
                <div className="ft-icon-wrapper">
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                </div>
              </div>
              <hr
                style={{
                  margin: "2rem 0",
                  border: "1px solid rgba(105, 65, 198, 0.3)",
                }}
              />
              <div className="featured-tags">
                <p className="ft-header">Tags</p>
                <div className="ft-icon-wrapper">
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                  <FeaturedTag />
                </div>
              </div>
            </Panel>
            <Panel title="Comments">
              <div className="post-comment">
                <img alt="loading" src={author2} className="white-border" />
                <div>
                  <p>Post a comment</p>
                  <img
                    alt="loading"
                    src={CommentButton}
                    className="arrow-img"
                  />
                </div>
              </div>
              <div className="sp-comments">
                <SpComment />
                <SpComment />
                <SpComment />
                <SpComment />
              </div>
              <div className="sp-buttons">
                <button className="previous-button">
                  <img src={arrow} alt="arrow-icon" />
                  <span>Previous</span>
                </button>
                <button className="styled-button">
                  <span>Next</span>
                  <img src={arrow} alt="arrow-icon" />
                </button>
              </div>
            </Panel>
          </Tabs>
        </div>
      </div>
      <div className="scripts-right">
        <h2>Most Popular Scripts</h2>
        <div className="script-cards">
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
          <ScriptPreview />
        </div>
      </div>
    </div>
  );
};

export default Scripts;

const SpComment = () => {
  return (
    <>
      <hr
        style={{
          margin: "5px 0",
          border: "1px solid rgba(105, 65, 198, 0.3)",
          width: "100%",
        }}
      />
      <div className="sp-comment">
        <img alt="loading" src={author2} className="white-border" />
        <div>
          <p className="sp-c-content">
            Where to grow your business as a photographer: site or social media?
          </p>
          <p className="sp-c-name">EstherHoward</p>
        </div>
      </div>
    </>
  );
};
