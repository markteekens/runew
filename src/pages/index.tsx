import Head from "next/head";
import React from "react";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Main from "~/components/Main/Main";

function Home() {
  return (
    //Component structuur
    <div>
      <Head>
        <title>Ruby Finance</title>
        <meta
          name="description"
          content="De moderne boekhouder voor Freelancers en ZZP'ers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
