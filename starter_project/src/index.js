import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Hello from "./components/Hello";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const languages = ["JavaScript", "Python", "Bash"];
root.render(
  <>
    <Header learning="Languages to learn..." languages={languages} />
    {/* <Hello name="React" extra="is great!" /> */}
    <Main />
    {/* <Aside /> */}
    <Footer />
  </>
);
