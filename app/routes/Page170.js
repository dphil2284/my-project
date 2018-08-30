/**
 *
 * Page170
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page170 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div
          style={{
            height: "3000px",
            width: "100%",
            backgroundColor: "#ffffff",
            padding: "4%"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffff"
            }}
          >
            <Row>
              <Column col={6}>
                <div
                  style={{
                    width: "100%",
                    height: "150px",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "90px",
                      transform: "translateY(-50%)",
                      top: "50%",
                      marginLeft: "12px"
                    }}
                  >
                    <a href="/home">
                      <img
                        src="https://github.com/dphil2284/harbor-class-02/blob/master/app/image/dphi-logo__.png?raw=true"
                        style={{ padding: "5px", width: "100%" }}
                      />
                    </a>
                  </div>
                </div>
              </Column>
              <Column col={6}>
                <div style={{ width: "100%", height: "150px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      position: "absolute",
                      marginLeft: "5%",
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>Work</span>
                    <div
                      style={{
                        height: "1px",
                        width: "20px",
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
                      <span style={{ fontSize: "22px", color: "#d1d1d1" }}>
                        Contact
                      </span>
                    </a>
                    <div
                      style={{
                        height: "1px",
                        width: "20px",
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
                      top: "49%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <a href="/about" style={{ textDecoration: "none" }}>
                      <span style={{ fontSize: "22px", color: "#d1d1d1" }}>
                        About
                      </span>
                    </a>
                    <div
                      style={{
                        height: "1px",
                        width: "20px",
                        marginTop: "10%",
                        backgroundColor: "#d1d1d1"
                      }}
                    />
                  </div>
                </div>
              </Column>
            </Row>
            <Row style={{ marginTop: "5px" }}>
              <Column col="12">
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "8px",
                    marginTop: "4%"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Sawarabi Mincho",
                      fontSize: "50px",
                      display: "block",
                      top: "50px",
                      color: "#150efa",
                      textAlign: "center"
                    }}
                  >
                    UX/UI
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#bfbfbf",
                      textAlign: "center",
                      display: "block",
                      marginTop: "1.5%",
                      letterSpacing: "-1px",
                      fontWeight: 200
                    }}
                  >
                    Storage 유통사 홈페이지 구축 / 운영에 대한 포트폴리오입니다.
                  </span>
                </div>
              </Column>
            </Row>
            <Row style={{ marginTop: "5%" }}>
              <Column col="12" style={{ position: "relative" }}>
                <div
                  style={{ width: "100%", height: "100%", textAlign: "center" }}
                >
                  <img
                    src="https://github.com/dphil2284/harbor-class-02/blob/master/app/image/Main-img.png?raw=true"
                    style={{
                      display: "inline-block",
                      width: "89%",
                      textAlign: "center",
                      position: "relative"
                    }}
                  />
                </div>
              </Column>
            </Row>
          </div>
        </div>

        <Column
          col={12}
          style={{
            height: "300px",
            top: "0px",
            backgroundColor: "#ffffff",
            bottom: "0px"
          }}
        >
          <div
            style={{
              justifyContent: "center",
              height: "300px",
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
                  height: "100px",
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
                      marginTop: "11px"
                    }}
                  >
                    BX Designer
                  </span>
                </p>
              </div>
              <div
                style={{
                  height: "100px",
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
                      marginTop: "11px"
                    }}
                  >
                    08239
                  </span>
                </p>
              </div>
              <div
                style={{
                  height: "100px",
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
                      marginTop: "11px"
                    }}
                  >
                    010.2284.2506
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Column>

      </div>
    ); // eslint-disable-line
  }
}

export default Page170;
