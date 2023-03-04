import React from "react";
import Image from "next/image";
function Header() {
  return (
    <header style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <a href="index-2.html">
                {/* NextJS heeft een eigen Image component om sneller Images te laden. Bovenin geimporteerd. Heeft een height en widt property nodig Voorbeeld: */}
                <Image
                  alt="logo"
                  src="/assets/img/logo.png"
                  height={26}
                  width={80}
                />
              </a>
            </div>
            <ul className="menu">
              <li>
                <a href="index-2.html">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index-2.html">homepage 1</a>
                  </li>
                  <li>
                    <a href="index-3.html">homepage 2</a>
                  </li>
                  <li>
                    <a href="index-4.html">homepage 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">about</a>
                  </li>
                  <li>
                    <a href="team.html">team</a>
                  </li>
                  <li>
                    <a href="services.html">services</a>
                  </li>
                  <li>
                    <a href="pricing.html">pricing</a>
                  </li>
                  <li>
                    <a href="404error.html">404 error</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="portfolio-grid.html">Portfolio</a>
                <ul className="sub-menu">
                  <li>
                    <a href="portfolio-grid.html">portfolio grid</a>
                  </li>
                  <li>
                    <a href="portfolio-masonry.html">portfolio masonry</a>
                  </li>
                  <li>
                    <a href="portfolio-metro.html">portfolio metro</a>
                  </li>
                  <li>
                    <a href="portfolio-single-v1.html">portfolio single v1</a>
                  </li>
                  <li>
                    <a href="portfolio-single-v2.html">portfolio single v2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog-grid.html">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">blog grid</a>
                  </li>
                  <li>
                    <a href="blog-single-post.html">blog single post 1</a>
                  </li>
                  <li>
                    <a href="blog-single-post-2.html">blog single post 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contacts.html">contacts</a>
              </li>
            </ul>
          </div>
          <div>
            <form id="content" style={{ zIndex: -1 }}>
              <button id="search-btn"></button>
            </form>
            <a href="#contact" className="themebtu">
              Plan gesprek
            </a>
          </div>
          <div className="bar-menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div
        className="mobile-nav hmburger-menu"
        id="mobile-nav"
        style={{ display: "block" }}
      >
        <div className="res-log">
          <a href="index-2.html">
            <img src="assets/img/logo.png" alt="Responsive Logo" />
          </a>
        </div>
        <ul>
          <li className="menu-item-has-children">
            <a href="JavaScript:void(0)">Home</a>
            <ul className="sub-menu">
              <li>
                <a href="index-2.html">homepage 1</a>
              </li>
              <li>
                <a href="index-3.html">homepage 2</a>
              </li>
              <li>
                <a href="index-4.html">homepage 3</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="JavaScript:void(0)">Pages</a>
            <ul className="sub-menu">
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                <a href="team.html">team</a>
              </li>
              <li>
                <a href="services.html">services</a>
              </li>
              <li>
                <a href="pricing.html">pricing</a>
              </li>
              <li>
                <a href="404error.html">404 error</a>
              </li>
            </ul>
          </li>

          <li className="menu-item-has-children">
            <a href="JavaScript:void(0)">portfolio</a>

            <ul className="sub-menu">
              <li>
                <a href="portfolio-grid.html">portfolio grid</a>
              </li>
              <li>
                <a href="portfolio-masonry.html">portfolio masonry</a>
              </li>
              <li>
                <a href="portfolio-metro.html">portfolio metro</a>
              </li>
              <li>
                <a href="portfolio-single-v1.html">portfolio single v1</a>
              </li>
              <li>
                <a href="portfolio-single-v2.html">portfolio single v2</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="JavaScript:void(0)">blog</a>

            <ul className="sub-menu">
              <li>
                <a href="blog-grid.html">blog grid</a>
              </li>
              <li>
                <a href="blog-single-post.html">blog single post 1</a>
              </li>
              <li>
                <a href="blog-single-post-2.html">blog single post 2</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="contacts.html">contacts</a>
          </li>
        </ul>

        <a href="JavaScript:void(0)" id="res-cross"></a>
      </div>
    </header>
  );
}

export default Header;
