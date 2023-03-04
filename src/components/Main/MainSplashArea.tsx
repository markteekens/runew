import React from "react";

function MainSplashArea() {
  return (
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
  );
}

export default MainSplashArea;
