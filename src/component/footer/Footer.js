import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer class="section bg-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Information
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <Link to="/page">Pages</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="">Feuchers</Link>
                  </li>
                  <li>
                    <Link to="">Pricing</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Ressources
                </h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <Link to="/">Home </Link>
                  </li>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/about">AboutUS</Link>
                  </li>
                  <li>
                    <Link to="/contact">ContactUs</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">Help</h6>
                <ul class="list-unstyled footer-link mt-4">
                  <li>
                    <Link to="/singup">Sign Up </Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/service">Terms of Services</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="">
                <h6 class="footer-heading text-uppercase text-white">
                  Contact Us
                </h6>
                <p class="contact-info mt-4">
                  Contact us if need help withanything
                </p>
                <p class="contact-info">+92 300-11-11-123</p>
                <div class="mt-5">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fa facebook footer-social-icon fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fa twitter footer-social-icon fa-twitter"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fa google footer-social-icon fa-google"></i>
                      </Link>
                    </li>
                    <li class="list-inline-item">
                      <Link to="#">
                        <i class="fa apple footer-social-icon fa-apple"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="footer-alt mb-0 f-14">
            2022 © <strong>React</strong> Tutorial, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
