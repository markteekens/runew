import React from "react";

function Main() {
  return (
    <div>
      <section
        className="hero-section-one"
        style={{ backgroundImage: "url(assets/img/hero-img-ruby3.jpeg)" }}
      >
        <div className="container">
          <div className="heading-boder">
            <h2>
              De moderne boekhouder voor Freelancers & <span>ZZPers</span>
            </h2>
          </div>
        </div>
      </section>
      <section className="intro gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="graph">
                <img alt="img" src="assets/img/graph-1.png" />
              </div>
            </div>
            <div className="col-lg-6 p-sm-0">
              <div className="heading">
                <h2>
                  {" "}
                  Een team van moderne boekhouders die jou als ZZPer begrijpen.
                </h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="marketing">
                <h4>
                  Als ZZPer of Freelancer wil je je maar op één ding focussen;
                  het runnen van je bedrijf.
                </h4>
                <p>
                  Ons team ontlast je van de administratie, zorgt voor een
                  correcte boekhouding en is bereikbaar voor al je (fiscale)
                  vragen. Wij zijn bereikbaar op tijden wanneer jij niet aan het
                  werk bent. En dat doen we zodat jij je kan focussen op het
                  geen dat écht belangrijk is: je business runnen.
                </p>
                <a href="about.html" className="themebtu">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sercives gap no-top">
        <div className="container">
          <div className="heading-boder two">
            <h2>
              Waarom ondernemers kiezen voor <span>ons</span>
            </h2>
            <p>Als klant sta jij centraal, wij ontzorgen het</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-1.jpg"
                />
                <div className="sercive-style-text">
                  <h6>Onbeperkt & Persoonlijk advies</h6>
                  <div className="boder"></div>
                  <p>
                    Een team van boekhouders en fiscale adviseurs die voor al je
                    vragen klaar staan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-2.jpg"
                />
                <div className="sercive-style-text">
                  <h6>Open wanneer het jou schikt</h6>
                  <div className="boder"></div>
                  <p>
                    Quisque volutpat mattis eros.Nullam malesuada erat ut
                    turpis. Suspendisse urnanibh.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-3.jpg"
                />
                <div className="sercive-style-text">
                  <h6>Boekhoud tool</h6>
                  <div className="boder"></div>
                  <p>
                    Sneller factureren en gemakkelijk bonnetjes uploaden in een
                    handige app.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="sercive-style mb-0">
                <img
                  alt="img"
                  className="w-100"
                  src="assets/img/sercive-4.jpg"
                />
                <div className="sercive-style-text">
                  <h6>Prijs vriendelijk</h6>
                  <div className="boder"></div>
                  <p>
                    Door een geautomiseerd werkproces houden we de kosten laag,
                    zo kan je als startende ondernemer meer besparen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>

      <section
        className="plans-pricing gap"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="heading">
            <h6>Pakketten &amp; Prijzen</h6>
            <h2>Starten met een goede boekhouding</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 Pricing-style">
              <div className="heading">
                <h2>Eén vaste prijs per jaar, maandelijks gefactureerd.</h2>
                <img alt="line" src="assets/img/headingline.png" />
              </div>
              <div className="marketing two">
                <h4 style={{ paddingBottom: "0px" }}>
                  Ons bedrijf is kostenefficiënt ingericht zodat we de beste
                  prijs kunnen geven.
                </h4>
                <p className="pt-3">
                  Als startende ondernemer heb je veel kosten. Daarom bieden wij
                  de volledige boekhouding met de boekhoud app, voor een vaste
                  lage prijs met de voordelen van een moderne boekhouder.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style">
                <div className="standard">
                  <h5>ZZP&apos;ers / Freelancers</h5>
                  <span>
                    <sup>€</sup>50
                  </span>
                </div>
                <p>
                  Als startende ondernemer wil je je kosten laag houden, daarom
                  hebben wij een pakket samengesteld die aan jou eisen voldoen.{" "}
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>Onbeperkt advies
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Boekhoud tool
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>4 verkoopfacturen p/m
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Limit 10 pages
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Support Customize
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Limit 10 pages
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check"></i>Support Customize
                  </li>
                </ul>
                <a href="#" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="Pricing-style mb-0">
                <div className="standard">
                  <h5>MKB</h5>
                  <span>
                    <sup>€</sup>60
                  </span>
                </div>
                <p>
                  Als groeiende ondernemer heb je soms net iets meer nodig,
                  daarom hebben wij een pakket samengesteld dat je volledig
                  ontzorgt bent.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>Everything in Free plan
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>10 Autosave drafts/page
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Live chat24X7
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Limit 10 pages
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Support Customize
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>10 Autosave drafts/page
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Live chat24X7
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Limit 10 pages
                  </li>
                  <li className="pb-0">
                    <i className="fa-solid fa-check"></i>Support Customize
                  </li>
                </ul>
                <a href="#" className="themebtu">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-4">
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
      <section className="gap no-top">
        <div className="container">
          <div className="swiper-container testimonialsswiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonials">
                  <img alt="img" src="assets/img/testimonials-1.jpg" />
                  <i className="fa-solid fa-quote-right"></i>
                  <div>
                    <h6>A multi-disciplinary team of creators ...</h6>
                    <p>
                      &quot; Suspendisse potenti. Sed egestas, ante et vulputate
                      volutpat, eros pede semper est, vitae luctus metus libero
                      eu augue. &quot;
                    </p>
                    <span>Edward Kim (Marketing Manager)</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonials">
                  <img alt="img" src="assets/img/testimonials-2.jpg" />
                  <i className="fa-solid fa-quote-right"></i>
                  <div>
                    <h6>A multi-disciplinary team of creators ...</h6>
                    <p>
                      &quot;&quot; Praesent elementum hendrerit tortor. Sed
                      semper lorem at felis. Vestibulum volutpat, lacus a
                      ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                      sapien ornare nisl. “
                    </p>
                    <span>Edward Kim (Marketing Manager)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section
        className="splash-area-section"
        style={{
          background:
            "linear-gradient(114deg, rgba(73,106,220,1) 36%, rgba(102,73,220,1) 100%);",
        }}
      >
        <div className="container">
          <div className="splash-area">
            <div className="container">
              <div className="awesome-project">
                <h4 style={{ color: "#fff", fontSize: "40px" }}>
                  Begin dit kwartaal zonder zorgen
                </h4>
                <a href="contacts.html" className="themebtu">
                  Bel mij
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <img className="w-100" alt="img" src="assets/img/team-1.jpg" />
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
                <img className="w-100" alt="img" src="assets/img/team-2.jpg" />
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
                <img className="w-100" alt="img" src="assets/img/team-3.jpg" />
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
                <img className="w-100" alt="img" src="assets/img/team-4.jpg" />
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
            <img alt="dots1" src="assets/img/dots1.png" />
          </div>
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
