/**
 *
 * Page169
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";
import { wem } from "ruucm-blocks/tools/mixins";
import { isMobile } from "ruucm-blocks/tools/media";

class Page169 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <div
          style={{
            height: "3000%",
            width: "100%",
            padding: "4%",
            backgroundColor: "#ffffff"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffff",
              top: wem(-221)
            }}
          >
            <Row>
              <Column col={6}>
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    height: "100%"
                  }}
                >
                  <div
                    style={{
                      width: wem(90),
                      position: "absolute",
                      transform: "translateY(-50%)",
                      top: "50%",
                      marginLeft: wem(12)
                    }}
                  >
                    <a href="/home">
                      <img
                        src="https://github.com/dphil2284/harbor-class-02/blob/master/app/image/dphi-logo__.png?raw=true"
                        style={{ width: "100%", padding: wem(5) }}
                      />
                    </a>
                  </div>
                </div>
              </Column>
              <Column col={6}>
                <div
                  style={{
                    width: "100%",
                    height: wem(150),
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "5%"
                    }}
                  >
                    <a href="/work" style={{ textDecoration: "none" }}>
                      <span style={{ fontSize: wem(22) }}>Work</span>
                    </a>
                    <div
                      style={{
                        heighg: wem(1),
                        width: wem(20),
                        marginTop: "10%",
                        backgroundColor: "#4500fc"
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      position: "absolute",
                      marginLeft: "45%",
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <a href="/contact" style={{ textDecoration: "none" }}>
                      <span
                        style={{
                          fontSize: wem(22),
                          color: "#d1d1d1",
                          textDecoration: "none"
                        }}
                      >
                        Contact
                      </span>
                    </a>
                    <div
                      style={{
                        heighg: wem(1),
                        width: wem(20),
                        marginTop: "10%",
                        backgroundColor: "#d1d1d1"
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      position: "absolute",
                      marginLeft: "25%",
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <a href="/about" style={{ textDecoration: "none" }}>
                      <span style={{ fontSize: wem(22), color: "#d1d1d1" }}>
                        About
                      </span>
                    </a>
                    <div
                      style={{
                        heighg: wem(1),
                        width: wem(20),
                        marginTop: "10%",
                        backgroundColor: "#d1d1d1"
                      }}
                    />
                  </div>
                </div>
              </Column>
            </Row>
            <Row style={{ marginTog: wem(5) }}>
              <Column col="12">
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: wem(8),
                    marginTop: "4%"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Sawarabi Mincho",
                      fontSize: wem(50),
                      display: "block",
                      top: wem(50),
                      color: "#150efa",
                      textAlign: "center"
                    }}
                  >
                    Hyun Sung Lee
                  </span>
                  <span
                    style={{
                      fontSize: wem(16),
                      color: "#bfbfbf",
                      textAlign: "center",
                      display: "block",
                      marginTop: "1.5%",
                      fontWeight: 300
                    }}
                  >
                    Portfolio - BX / UX, UI / Editorial / Guide
                  </span>
                </div>
              </Column>
            </Row>
            <Row style={{ marginTop: "5%" }}>
              <Column
                col="6"
                style={{ position: "relative", height: wem(698) }}
              >
                <div
                  style={{
                    backgroundColor: "#e8e8e8",
                    position: "absolute",
                    width: "96%",
                    height: wem(698),
                    padding: wem(7),
                    background: "red"
                  }}
                  className="first-col"
                >
                  <a href="/Sub page-01">
                    <img style={{ width: "100%" }} />
                  </a>
                </div>
              </Column>
              <Column
                col="6"
                style={{ position: "relative", height: wem(698) }}
                className="second-col2"
              >
                <div
                  style={{
                    height: wem(477),
                    backgroundColor: "#d7d7d7",
                    position: "absolute",
                    width: "96%",
                    righg: wem(0)
                  }}
                  className="second-col"
                >
                  <img
                    style={{
                      width: "100%",
                      righg: wem(0),
                      display: "block",
                      position: "absolute"
                    }}
                  />
                </div>
              </Column>
            </Row>
            <Row style={{ marginTop: "5%" }}>
              <Column
                col="6"
                style={{ position: "relative", height: wem(477) }}
                className="third-col2"
              >
                <div
                  style={{
                    backgroundColor: "#d0d0d0",
                    position: "absolute",
                    width: "96%",
                    height: wem(477),
                    padding: wem(7)
                  }}
                  className="third-col"
                >
                  <a href="/Sub page-01">
                    <img />
                  </a>
                </div>
              </Column>
              <Column
                col="6"
                style={{ position: "relative", height: wem(698) }}
              >
                <div
                  style={{
                    height: wem(698),
                    backgroundColor: "#d7d7d7",
                    position: "absolute",
                    width: "96%",
                    righg: wem(0),
                    top: wem(-221)
                  }}
                  className="fourth-col"
                >
                  <img
                    style={{
                      width: "100%",
                      righg: wem(0),
                      display: "block",
                      position: "absolute"
                    }}
                  />
                </div>
              </Column>
            </Row>
            <Row>
              <div />
            </Row>
          </div>
        </div>

        <Column
          col={12}
          style={{
            height: wem(300),
            backgroundColor: "#ffffff",
            bottog: wem(0),
            tog: wem(0)
          }}
        >
          <div
            style={{
              justifyContent: "center",
              height: wem(300),
              backgroundColor: "#150efa",
              width: "100%",
              position: "relative",
              transform: "translateY(-50%)",
              top: "50%"
            }}
          >
            <div>
              <div
                style={{
                  height: wem(100),
                  top: "50%",
                  position: "absolute",
                  transform: "translateY(-50%)",
                  marginLeft: "2%"
                }}
              >
                <p
                  style={{
                    top: "50%",
                    position: "relative",
                    transform: "translateY(-50%)"
                  }}
                >
                  <span style={{ display: "block", color: "#ffffff" }}>
                    HyunSung Lee
                  </span>
                  <span
                    style={{
                      display: "block",
                      color: "#ffffff",
                      marginTop: wem(11)
                    }}
                  >
                    BX Designer
                  </span>
                </p>
              </div>
              <div
                style={{
                  height: wem(100),
                  top: "50%",
                  position: "absolute",
                  transform: "translateY(-50%)",
                  marginLeft: "22%"
                }}
              >
                <p
                  style={{
                    top: "50%",
                    position: "relative",
                    transform: "translateY(-50%)"
                  }}
                >
                  <span style={{ display: "block", color: "#ffffff" }}>
                    Guro-gu,Seoul, Republic of Korea
                  </span>
                  <span
                    style={{
                      display: "block",
                      color: "#ffffff",
                      marginTop: wem(11)
                    }}
                  >
                    08239
                  </span>
                </p>
              </div>
              <div
                style={{
                  height: wem(100),
                  top: "50%",
                  position: "absolute",
                  transform: "translateY(-50%)",
                  marginLeft: "55%"
                }}
              >
                <p
                  style={{
                    top: "50%",
                    position: "relative",
                    transform: "translateY(-50%)"
                  }}
                >
                  <span style={{ display: "block", color: "#ffffff" }}>
                    d_phil@naver.com
                  </span>
                  <span
                    style={{
                      display: "block",
                      color: "#ffffff",
                      marginTop: wem(11)
                    }}
                  >
                    010.2284.2506
                  </span>
                </p>
              </div>
              <div
                style={{
                  right: "1%",
                  height: "100%",
                  width: "100%",
                  display: "inline-block",
                  position: "absolute"
                }}
              >
                <div
                  style={{
                    height: wem(40),
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    marginLeft: "55%",
                    right: "0%",
                    width: wem(40)
                  }}
                >
                  <a href="#">
                    <i
                      className="fab fa-dribbble"
                      style={{
                        fontSize: wem(24),
                        top: "50%",
                        position: "relative",
                        transform: "translate(-50%, -50%)",
                        left: "50%",
                        color: "#ffffff"
                      }}
                    />
                  </a>
                </div>
                <div
                  style={{
                    height: wem(40),
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    right: "3.5%",
                    width: wem(40)
                  }}
                >
                  <a href="#">
                    <i
                      className="fab fa-twitter"
                      style={{
                        fontSize: wem(24),
                        top: "50%",
                        position: "relative",
                        transform: "translate(-50%, -50%)",
                        left: "50%",
                        color: "#ffffff"
                      }}
                    />
                  </a>
                </div>
                <div
                  style={{
                    height: wem(40),
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    right: "7%",
                    width: wem(40)
                  }}
                >
                  <a href="#">
                    <i
                      className="fab fa-facebook-f"
                      style={{
                        fontSize: wem(24),
                        top: "50%",
                        position: "relative",
                        transform: "translate(-50%, -50%)",
                        left: "50%",
                        color: "#ffffff"
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Column>
      </div>
    ); // eslint-disable-line
  }
}

export default Page169;
