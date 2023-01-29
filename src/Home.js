import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "./assets/img/logo.png";

function Home() {
  //Fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  //Toggle Menu
  const [show,setShow] = useState(true);
  //spin
  const[loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2000);
  },[]);
  return (
    <div className="home" id="Home">
      {loading ? (
      <div className="loader">
          <div className="spin"></div>
      </div>
      ) : (
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo pointer">
            <a href="#Home"><img src={logo} alt="" /></a>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/*Toggle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify white pointer" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
            <ul className="sidebar d__flex">
                <li className="sideNavbar"><a href="#Home">Home</a></li>
                <li className="sideNavbar"><a href="#About">About</a></li>
                <li className="sideNavbar"><a href="#Skills">Skills</a></li>
                <li className="sideNavbar"><a href="#Projects">Project</a></li>
                <li className="sideNavbar"><a href="#Contact">Contact</a></li>
            </ul>
          </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Dinesh Kumar</h2>
              <h3 className="home__text sweet pz__10">B.E Graduate</h3>
              <h4 className="home__text pz__10">Based In INDIA.</h4>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Home;
