import React, { useState } from "react";
import "./App.css";
import {
  Navbar,
  Landing,
  About,
  Extension,
  Footer,
  Loader,
} from "./Components";

const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 5000);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Landing />
          <About />
          <Extension />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
