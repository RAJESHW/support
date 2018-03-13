import React, { Component } from "react";
import Header from './Components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="gwos-body">
          <div className="row">
            <div className="small-24">&nbsp;</div>
          </div>
          <div className="row">
            <div className="small-24">
              <div className=" fade-in" id="surprise">
                <div className="gwos-package">
                  <div>
                    <div className="gwos-board-title fill gw-green-dark">
                      <h4>
                        Claims Report X<small>&#8212; subtitle</small>
                      </h4>
                      <ul className="menu controls">
                        <li>
                          <a
                            className="button fill gw-green-dark float-right"
                            onclick="xFunction()"
                          >
                            <i className="fa fa-close fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="gwos-card-body" />
                    <div
                      style={{
                        display: "block",
                        height: "400px",
                        width: "100%",
                        background: "#fff",
                        "border-top": "#ccc 1px solid",
                        padding: "1rem"
                      }}
                    >
                      report date will appear here
                    </div>
                  </div>
                </div>
              </div>
              <div className=" fade-in" id="surprise2">
                <div className="gwos-package">
                  <div>
                    <div className="gwos-board-title fill gw-green-dark">
                      <h4>
                        Claims Report Z<small>&#8212; subtitle</small>
                      </h4>
                      <ul className="menu controls">
                        <li>
                          <a
                            className="button fill gw-green-dark float-right"
                            onclick="xFunction2()"
                          >
                            <i className="fa fa-close fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="gwos-card-body" />
                    <div
                      style={{
                        display: "block",
                        height: "400px",
                        width: "100%",
                        background: "#fff",
                        "border-top": "#ccc 1px solid",
                        padding: "1rem"
                      }}
                    >
                      report date will appear here
                    </div>
                  </div>
                </div>
              </div>
              <div className=" fade-in" id="surprise4">
                <div className="gwos-package">
                  <div>
                    <div className="gwos-board-title fill gw-blue-dark">
                      <h4>
                        Care Report ZZ<small>&#8212; subtitle</small>
                      </h4>
                      <ul className="menu controls">
                        <li>
                          <a
                            className="button fill gw-blue-dark float-right"
                            onclick="xFunction4()"
                          >
                            <i className="fa fa-close fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="gwos-card-body" />
                    <div
                      style={{
                        display: "block",
                        height: "400px",
                        width: "100%",
                        background: "#fff",
                        "border-top": "#ccc 1px solid",
                        padding: "1rem"
                      }}
                    >
                      report date will appear here
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="small-24">
              <h5 className="white">Claims</h5>
              <div className="contain">
                <div className="row">
                  <div className="row_inner">
                    <div className="tile" style={{ "margin-left": "-240px" }}>
                      <div className="title_media" />
                      <div>
                        <div className="tile" />
                        <div className="gwos-package">
                          <div className="gwos-card">
                            <img
                              className="fade-in logo-positions"
                              src="assets/logo_green_fade.png"
                            />
                            <div className="gwos-card-title">
                              <h4>Top 3</h4>
                            </div>
                            <div className="gwos-card-body fill blcak">
                              <div className="grid">
                                <a
                                  className="tag fill gw-green-dark"
                                  onclick="xFunction()"
                                >
                                  Claims Report X
                                </a>{" "}
                                <a className="tag fill gw-green-dark" href="#">
                                  SODA Report
                                </a>
                                <a className="tag fill gw-green-dark" href="#">
                                  SOAAP Report
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tile" />
                    <div className="gwos-package">
                      <div className="gwos-card">
                        <div className="gows-card-title">
                          <h4>Report 100x</h4>
                        </div>
                        <div className="gwos-card-body fill black">
                          <div className="grid">
                            <a
                              className="tag fill gw-green-dark"
                              onclick="xFunction()"
                              style={{ "z-index": "345945845" }}
                            >
                              Claims Report X
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="tile_details" />
                    </div>
                  </div>
                </div>
                <div className="tile" />
                <div className="gwos-package">
                  <div className="gwos-card">
                    <div className="gows-card-title">
                      <h4>Report 100z</h4>
                    </div>
                    <div className="gwos-card-body fill black">
                      <div className="grid">
                        <a
                          className="tag fill gw-green-dark"
                          onclick="xFunction()"
                          style={{ "z-index": "345945845" }}
                        >
                          Claims Report Z
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tile_details" />
                </div>
              </div>
            </div>
            <div className="tile" />
            <div className="gwos-package">
              <div className="gwos-card">
                <div className="gows-card-title">
                  <h4>Report 100</h4>
                </div>
                <div className="gwos-card-body fill black">
                  <div className="grid">
                    <a
                      className="tag fill gw-green-dark"
                      onclick="()"
                      style={{ "z-index": "345945845" }}
                    >
                      Open Span FEB Dashboard
                    </a>
                  </div>
                </div>
              </div>
              <div className="tile_details" />
            </div>
          </div>
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 200</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-green-dark"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Claims Report 200
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 300</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-green-dark"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Claims Report 300
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 400</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-green-dark"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Claims Report 400
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 500</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-green-dark"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Claims Report 500
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 550</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-green-dark"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Claims Report 550
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="small-24">
          <h5 className="white">Care</h5>
          <div className="contain">
            <div className="row">
              <div className="row_inner">
                <div className="tile" style={{ "margin-left": "-240px" }}>
                  <div className="title_media" />
                  <div>
                    <div className="tile" />
                    <div className="gwos-package">
                      <div className="gwos-card">
                        <img
                          className="fade-in logo-positions"
                          src="assets/logo_blue_fade.png"
                        />
                        <div className="gwos-card-title">
                          <h4>Top 3</h4>
                        </div>
                        <div className="gwos-card-body fill blcak">
                          <div className="grid">
                            <a
                              className="tag fill gw-blue"
                              onclick="xFunction4()"
                            >
                              Care Report ZZ
                            </a>{" "}
                            <a className="tag fill gw-blue" href="#">
                              Dashboard Manager View
                            </a>
                            <a className="tag fill gw-blue" href="#">
                              Dashboard Advocate View
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tile" />
                <div className="gwos-package">
                  <div className="gwos-card">
                    <div className="gows-card-title">
                      <h4>Report 100</h4>
                    </div>
                    <div className="gwos-card-body fill black">
                      <div className="grid">
                        <a
                          className="tag fill gw-blue"
                          onclick="()"
                          style={{ "z-index": "345945845" }}
                        >
                          Care 100
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tile_details" />
                </div>
              </div>
            </div>
            <div className="tile" />
            <div className="gwos-package">
              <div className="gwos-card">
                <div className="gows-card-title">
                  <h4>Report 200</h4>
                </div>
                <div className="gwos-card-body fill black">
                  <div className="grid">
                    <a
                      className="tag fill gw-blue"
                      onclick="()"
                      style={{ "z-index": "345945845" }}
                    >
                      Care 100
                    </a>
                  </div>
                </div>
              </div>
              <div className="tile_details" />
            </div>
          </div>
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 300</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Care 300
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 400</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Care 400
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 500</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Care 500
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 600</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Care 600
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 700</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Care 700
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 800</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Care 800
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 900</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  Care 900
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="small-24">
          <div className=" fade-in" id="surprise3">
            <div className="gwos-package">
              <div>
                <div className="gwos-board-title fill gw-blue-5alt">
                  <h4>
                    Em&B Report X X<small>&#8212; subtitle</small>
                  </h4>
                  <ul className="menu controls">
                    <li>
                      <a
                        className="button fill gw-blue-5alt float-right"
                        onclick="xFunction3()"
                      >
                        <i className="fa fa-close fa-2x" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="gwos-card-body" />
                <div
                  style={{
                    display: "block",
                    height: "400px",
                    width: "100%",
                    background: "#fff",
                    "border-top": "#ccc 1px solid",
                    padding: "1rem"
                  }}
                >
                  report date will appear here
                </div>
              </div>
            </div>
          </div>
          <h5 className="white">EM&B</h5>
          <div className="contain">
            <div className="row">
              <div className="row_inner">
                <div className="tile" style={{ "margin-left": "-240px" }}>
                  <div className="title_media" />
                  <div>
                    <div className="tile" />
                    <div className="gwos-package">
                      <div className="gwos-card">
                        <img
                          className="fade-in logo-positions"
                          src="assets/logo_blue_fade.png"
                        />
                        <div className="gwos-card-title">
                          <h4>Top 3</h4>
                        </div>
                        <div className="gwos-card-body fill blcak">
                          <div className="grid">
                            <a
                              className="tag fill gw-blue"
                              onclick="xFunction3()"
                            >
                              EM&B Report X
                            </a>{" "}
                            <a className="tag fill gw-blue" href="#">
                              Cobra FMICCA
                            </a>
                            <a className="tag fill gw-blue" href="#">
                              EM&B Cash Log
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tile" />
                <div className="gwos-package">
                  <div className="gwos-card">
                    <div className="gows-card-title">
                      <h4>Report 100</h4>
                    </div>
                    <div className="gwos-card-body fill black">
                      <div className="grid">
                        <a
                          className="tag fill gw-blue"
                          onclick="()"
                          style={{ "z-index": "345945845" }}
                        >
                          EM&B Report 100
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tile_details" />
                </div>
              </div>
            </div>
            <div className="tile" />
            <div className="gwos-package">
              <div className="gwos-card">
                <div className="gows-card-title">
                  <h4>Report 200</h4>
                </div>
                <div className="gwos-card-body fill black">
                  <div className="grid">
                    <a
                      className="tag fill gw-blue"
                      onclick="()"
                      style={{ "z-index": "345945845" }}
                    >
                      EM&B Report 200
                    </a>
                  </div>
                </div>
              </div>
              <div className="tile_details" />
            </div>
          </div>
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 300</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 300
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 400</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 400
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 500</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 500
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 600</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 700
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 700</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 700
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 800</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 800
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 900</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 900
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 920</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 920
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
        <div className="tile" />
        <div className="gwos-package">
          <div className="gwos-card">
            <div className="gows-card-title">
              <h4>Report 990</h4>
            </div>
            <div className="gwos-card-body fill black">
              <div className="grid">
                <a
                  className="tag fill gw-blue"
                  onclick="()"
                  style={{ "z-index": "345945845" }}
                >
                  EM&B Report 990
                </a>
              </div>
            </div>
          </div>
          <div className="tile_details" />
        </div>
      </div>
    );
  }
}

export default App;
