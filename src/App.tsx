import React from "react";
import Routes from "./routes";
import * as dotenv from "dotenv";
import Footer from "./components/Footer";

dotenv.config();
function App() {
  return (
    <>
      <Routes />
      <Footer />
    </>
  );
}

export default App;
