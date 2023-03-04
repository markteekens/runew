import React from "react";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Main from "~/components/Main";

function Home() {
  return (
    //Component structuur
    <div>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
