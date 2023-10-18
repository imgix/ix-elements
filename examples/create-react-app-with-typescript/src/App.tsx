/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import IxVideoPage from "./pages/IxVideo";
import IxPlayerPage from "./pages/IxPlayer";
import IxPlayerLazyPage from "./pages/IxPlayerLazy";

function App() {
  return (
    <>
      <header>
        <div className="left-header">
          <a className="imgix-logo" href="https://imgix.com/solutions/video-api?gad=1" target="_blank">
            <img width="81" height="26" src="https://assets.imgix.net/imgix-logo.png?fm=auto&w=281&h=226" alt="imgix logo" decoding="async" />
          </a>
          <h1><a href="/">ix-elements</a></h1>
        </div>
        <div className="right-header">
          <a className="github-logo" href="https://github.com/imgix/ix-elements" target="_blank">
            <img width="32" height="32" src="https://avatars.githubusercontent.com/u/2793044?s=200&v=4" alt="Github logo" />
          </a>
        </div>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="IxVideo" element={<IxVideoPage />} />
          <Route path="IxPlayer" element={<IxPlayerPage />} />
          <Route path="IxPlayerLazy" element={<IxPlayerLazyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
