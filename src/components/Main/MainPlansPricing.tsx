import React from "react";

function MainPlansPricing() {
  return (
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
                Ons bedrijf is kostenefficiënt ingericht zodat we de beste prijs
                kunnen geven.
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
                Als groeiende ondernemer heb je soms net iets meer nodig, daarom
                hebben wij een pakket samengesteld dat je volledig ontzorgt
                bent.
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
  );
}

export default MainPlansPricing;
