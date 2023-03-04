import React from "react";
import Image from "next/image";
function IntroGap() {
  return (
    <section className="intro gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="graph">
              <Image
                alt="img"
                src="/assets/img/graph-1.png"
                height={450}
                width={600}
              />
            </div>
          </div>
          <div className="col-lg-6 p-sm-0">
            <div className="heading">
              <h2>
                {" "}
                Een team van moderne boekhouders die jou als ZZPer begrijpen.
              </h2>
              <Image
                alt="line"
                src="/assets/img/headingline.png"
                height={10}
                width={40}
              />
            </div>
            <div className="marketing">
              <h4>
                Als ZZPer of Freelancer wil je je maar op één ding focussen; het
                runnen van je bedrijf.
              </h4>
              <p>
                Ons team ontlast je van de administratie, zorgt voor een
                correcte boekhouding en is bereikbaar voor al je (fiscale)
                vragen. Wij zijn bereikbaar op tijden wanneer jij niet aan het
                werk bent. En dat doen we zodat jij je kan focussen op het geen
                dat écht belangrijk is: je business runnen.
              </p>
              <a href="about.html" className="themebtu">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroGap;
