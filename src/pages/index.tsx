import { useRouter } from "next/router";
import React, { useState } from "react";
import Contact from "~/components/Contact";
import { api } from "../../src/utils/api";

function Home() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default Home;
