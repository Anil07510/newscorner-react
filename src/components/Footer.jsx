import React, { Component } from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer_container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                <h3 className="news_corner">News Corner</h3>
                <p>
                  We are an award-winning creative agency, dedicated to the best
                  result in web design, promotion, business consulting, and
                  marketing.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>2502 Ratu Road Ranchi jh</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd>
                  <a to="mailto:#">aniraj@gmail.com</a>
                </dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd>
                  <a to="tel:#">9262950884</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3 footer_link">
              <h5>Links</h5>
              <ul className="nav-list">
                <li>
                  <a to="#">About</a>
                </li>
                <li>
                  <a to="#">Projects</a>
                </li>
                <li>
                  <a to="#">Blog</a>
                </li>
                <li>
                  <a to="#">Contacts</a>
                </li>
                <li>
                  <a to="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col">
            <a className="social-inner" to="#">
              <span>
                <FacebookIcon />
              </span>
            </a>
          </div>
          <div className="col">
            <a className="social-inner" to="#">
              <span>
                <InstagramIcon />
              </span>
            </a>
          </div>
          <div className="col">
            <a className="social-inner" to="#">
              <span>
                <TwitterIcon />
              </span>
            </a>
          </div>
          <div className="col">
            <a className="social-inner" to="#">
              <span>
                <YouTubeIcon />
              </span>
            </a>
          </div>
          {/* <!-- Rights--> */}
          <p className="rights">
            <span>© </span>
            <span className="copyright-year">2023</span>
            <span>- </span>
            <span className="nuclearTech">Nuclear Tech</span>
            <span> - </span>
            <span>All Rights Reserved.</span>
          </p>
        </div>
      </>
    );
  }
}
