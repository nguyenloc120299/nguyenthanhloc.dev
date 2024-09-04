"use client";

import React, { useEffect, useState } from "react";

const getCurrentTheme = (): string => {
  return localStorage.getItem("template.theme") || "light"; // Default to 'light' if not set
};

const loadTheme = (theme: string) => {
  const root = document.querySelector(":root");
  root && root.setAttribute("color-scheme", `${theme}`);
};

const MainHeader = () => {
  const [theme, setTheme] = useState<"dark" | "light" | string>(
    getCurrentTheme()
  );

  useEffect(() => {
    // Load the current theme when the component mounts
    loadTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("template.theme", newTheme);
  };

  return (
    <header id="header" className="header d-flex justify-content-between">
      {/* Navigation Menu Start */}
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            <li className="menu__item">
              <a className="menu__link btn" href="#home">
                <span className="menu__caption">Home</span>
                <i className="ph-bold ph-house-simple" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#portfolio">
                <span className="menu__caption">Portfolio</span>
                <i className="ph-bold ph-squares-four" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#about">
                <span className="menu__caption">About Me</span>
                <i className="ph-bold ph-user" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#resume">
                <span className="menu__caption">Resume</span>
                <i className="ph-bold ph-article" />
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link btn" href="#contact">
                <span className="menu__caption">Contact</span>
                <i className="ph-bold ph-envelope" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Navigation Menu End */}
      {/* Header Controls Start */}
      <div className="header__controls d-flex justify-content-end">
        <button
          id="color-switcher"
          className="color-switcher header__switcher btn"
          type="button"
          role="switch"
          onClick={toggleTheme}
          aria-label="light/dark mode"
          aria-checked="true"
        >
          {theme === "dark" ? (
            <>
              <em></em>
              <i className="ph-bold ph-moon-stars"></i>
            </>
          ) : (
            <>
              <em></em>
              <i className="ph-bold ph-sun"></i>
            </>
          )}
        </button>
        <a
          id="notify-trigger"
          className="header__trigger btn"
          href="mailto:example@example.com?subject=Message%20from%20your%20site"
        >
          <span className="trigger__caption">{`Let's Talk`}</span>
          <i className="ph-bold ph-chat-dots" />
        </a>
      </div>
      {/* Header Controls End */}
    </header>
  );
};

export default MainHeader;
