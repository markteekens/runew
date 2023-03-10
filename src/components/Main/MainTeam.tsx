import React from "react";
import Image from "next/image";
function MainTeam() {
  return (
    <section className="gap team-section">
      <div className="container">
        <div className="heading-boder two">
          <h2>
            Our <span>Team</span> & Digital Heroes
          </h2>
          <p>We are an always curious, strategic-creative digital agency</p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="team-member">
              <Image
                className="w-100"
                alt="img"
                src="/assets/img/team-1.jpg"
                height={370}
                width={500}
              />
              <div className="team-member-text">
                <h6>
                  <a href="team.html">Klay Carson</a>
                </h6>
                <p>Product Manager</p>
                <ul className="brandicon">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="team-member">
              <Image
                className="w-100"
                alt="img"
                src="/assets/img/team-2.jpg"
                height={370}
                width={500}
              />
              <div className="team-member-text">
                <h6>
                  <a href="team.html">Naomi Norman</a>
                </h6>
                <p>Product Manager</p>
                <ul className="brandicon">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="team-member">
              <Image
                className="w-100"
                alt="img"
                src="/assets/img/team-3.jpg"
                height={370}
                width={500}
              />
              <div className="team-member-text">
                <h6>
                  <a href="team.html">Bert Graham</a>
                </h6>
                <p>Product Manager</p>
                <ul className="brandicon">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="team-member mb-0">
              <Image
                className="w-100"
                alt="img"
                src="/assets/img/team-4.jpg"
                height={370}
                width={500}
              />
              <div className="team-member-text">
                <h6>
                  <a href="team.html">Bert Graham</a>
                </h6>
                <p>Product Manager</p>
                <ul className="brandicon">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="btugap">
          <a href="about.html" className="themebtu">
            More About Us
          </a>
        </div>
      </div>
      <div className="tp-hero__shapes">
        <div className="style-shapes-4">
          <Image
            alt="dots1"
            src="/assets/img/dots1.png"
            height={100}
            width={100}
          />
        </div>
        <div className="style-shapes-5">
          <Image
            alt="dots1"
            src="/assets/img/shap-2.png"
            height={100}
            width={100}
          />
        </div>
        <div className="style-shapes-6">
          <Image
            alt="dots1"
            src="/assets/img/shap-2.png"
            height={100}
            width={100}
          />
        </div>
        <div className="style-shapes-7">
          <Image
            alt="dots1"
            src="/assets/img/shap-5.png"
            height={20}
            width={100}
          />
        </div>
      </div>
    </section>
  );
}

export default MainTeam;
