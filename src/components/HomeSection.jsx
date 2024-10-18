/** @format */

import "./HomeSection.css";
import React, { useEffect, useRef } from "react";
import pozaImage from "../utils/poza.jpeg";

const HomeSection = () => {
  const phrases = [
    "Software Developer",
    "Programmer",
    "Coder",
    "Web Developer",
    "Software Engineer",
  ];
  const sleepTime = 100;
  const elRef = useRef(null);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const el = elRef.current;
    let phraseIndex = 0;

    const WriteLoop = async () => {
      while (true) {
        let curWord = phrases[phraseIndex];
        // Typing effect
        for (let i = 0; i < curWord.length; i++) {
          if (el) {
            el.innerText = curWord.substring(0, i + 1);
          }
          await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);
        for (let i = curWord.length; i >= 0; i--) {
          if (el) {
            el.innerText = curWord.substring(0, i);
          }
          await sleep(sleepTime);
        }
        await sleep(sleepTime * 2);
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    };

    const handleDOMContentLoaded = () => {
      WriteLoop();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  return (
    <section id="home-section">
      <div className="HomeSectionText1">
        <div className="HomeSectionText">
          <div className="HomeSectionText1">
            <h1 className="HomeSectionLabel1"> Hello, I'm </h1>
            <h1 className="HomeSectionLabel2"> Robert</h1>
          </div>
          <div className="HomeSectionAnimatedText">
            <span id="TypeWritter" ref={elRef} className="TypeWritter">
              {" "}
            </span>
            <span className="Cursor">|</span>
          </div>
          <div className="Logos">
            <ul>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/robi.lel.7/"
                  target="_blank"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="www.linkedin.com/in/leliuc-robert-997a35232"
                  target="_blank"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="instagram" href="#" target="_blank">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  className="github"
                  href="https://github.com/LeliucRobert"
                  target="_blank"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="images/me.jfif"
          alt="Image description"
          className="Home-Image"
        />
      </div>
    </section>
  );
};

export default HomeSection;
