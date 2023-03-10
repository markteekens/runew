import React from "react";
import Image from "next/image";
function MainServiceGap() {
  return (
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
              <Image
                alt="img"
                className="w-100"
                src="/assets/img/sercive-1.jpg"
                width={800}
                height={200}
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
              <Image
                alt="img"
                className="w-100"
                src="/assets/img/sercive-2.jpg"
                width={800}
                height={200}
              />
              <div className="sercive-style-text">
                <h6>Open wanneer het jou schikt</h6>
                <div className="boder"></div>
                <p>
                  Quisque volutpat mattis eros.Nullam malesuada erat ut turpis.
                  Suspendisse urnanibh.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="sercive-style">
              <Image
                alt="img"
                className="w-100"
                src="/assets/img/sercive-3.jpg"
                width={800}
                height={200}
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
              <Image
                alt="img"
                className="w-100"
                src="/assets/img/sercive-4.jpg"
                width={800}
                height={200}
              />
              <div className="sercive-style-text">
                <h6>Prijs vriendelijk</h6>
                <div className="boder"></div>
                <p>
                  Door een geautomiseerd werkproces houden we de kosten laag, zo
                  kan je als startende ondernemer meer besparen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-hero__shapes">
        <div className="style-shapes-5">
          <Image
            alt="dots1"
            src="/assets/img/dots1.png"
            width={100}
            height={100}
          />
        </div>
        <div className="style-shapes-6">
          <Image
            alt="dots1"
            src="/assets/img/shap-2.png"
            width={100}
            height={100}
          />
        </div>
        <div className="style-shapes-7">
          <Image
            alt="dots1"
            src="/assets/img/shap-5.png"
            width={80}
            height={20}
          />
        </div>
      </div>
    </section>
  );
}

export default MainServiceGap;
