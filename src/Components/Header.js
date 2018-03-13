import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="gwos-header">
          <div className="brand-box">
            <a href="index.html" title="App">
              <img src="assets/header_loop.png" /> Enterprise{" "}
              <strong>Reporting</strong>
            </a>
          </div>
          <div className="controls">
            <ul className="menu" data-dropdown-menu="" />
            <ul className="menu">
              <li>
                <a className="button" href="#">
                  <span className="avatar">
                    <img src="http://www.placecage.com/300/300" />
                  </span>User Name Here
                </a>
                <ul className="menu">
                  <li>
                    <a href="#">
                      <i className="fa fa-cogs" /> Account Settings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-comments" /> Feedback
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-question-circle" /> Help Center &amp;
                      F.A.Q
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-power-off" /> Sign Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="gwos-sub-header" style={{ "border-top": "1px" }}>
          <div className="marquee">
            <p>
              <i className="fa" /> REMIDER! Reports need to BE DELIVERED TODAT…
            </p>
            <p className="gw-yellow">
              Remember to label and reports accurately…
            </p>
            <p>
              Be <b>SURE</b> your <b>DATA</b> <i className="fa" /> is{" "}
              <b>COMPLETE</b> <i>before</i> exporting!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
