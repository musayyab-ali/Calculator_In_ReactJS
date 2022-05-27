import React from "react";
import { Link } from "react-router-dom";
import b1 from "../../Assets/team-2.jpg";
import b2 from "../../Assets/team-2.jpg";
import b3 from "../../Assets/team-3.jpg";
import b4 from "../../Assets/team-4.jpg";

import "./teamsection.css";
function teamSection() {
  return (
    <>
      <section class="team-section">
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h1>Our Team</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="team-items">
              <div class="item">
                <img src={b1} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Shahzaib</h5>
                    <p>Designer</p>
                    <div class="social-links">
                      <Link to="">
                        <span class="fa fa-facebook"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-twitter"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-linkedin"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-youtube"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={b2} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Khawar Khan</h5>
                    <p>Designer</p>
                    <div class="social-links">
                      <Link to="">
                        <span class="fa fa-facebook"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-twitter"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-linkedin"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-youtube"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={b3} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Ahmad Chand</h5>
                    <p>Designer</p>
                    <div class="social-links">
                      <Link to="">
                        <span class="fa fa-facebook"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-twitter"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-linkedin"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-youtube"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src={b4} alt="team" />
                <div class="inner">
                  <div class="info">
                    <h5>Naveed Ahmad</h5>
                    <p>Designer</p>
                    <div class="social-links">
                      <Link to="">
                        <span class="fa fa-facebook"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-twitter"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-linkedin"></span>
                      </Link>
                      <Link to="">
                        <span class="fa fa-youtube"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default teamSection;
