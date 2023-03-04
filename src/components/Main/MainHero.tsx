import React from "react";
import Image from "next/image";
function MainHero() {
  return (
    <section className="hero-section-one">
      <Image
        src="/assets/img/hero-img-ruby3.jpeg"
        alt=""
        fill
        style={{ position: "absolute" }}
      />
      <div className="container">
        <div className="heading-boder">
          <h2>
            De moderne boekhouder voor Freelancers & <span>ZZPers</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
