import React from "react";

function MainTestomonials() {
  return (
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
                    volutpat, eros pede semper est, vitae luctus metus libero eu
                    augue. &quot;
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
                    &quot;&quot; Praesent elementum hendrerit tortor. Sed semper
                    lorem at felis. Vestibulum volutpat, lacus a ultrices
                    sagittis, mi neque euismod dui, eu pulvinar nunc sapien
                    ornare nisl. “
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
  );
}

export default MainTestomonials;
