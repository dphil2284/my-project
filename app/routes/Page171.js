/**
 *
 * Page171
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page171 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div
          style={{
            height: "900px",
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
                      width: "90px",
                      position: "absolute",
                      transform: "translateY(-50%)",
                      top: "50%",
                      padding: "5px",
                      marginLeft: "12px"
                    }}
                  >
                    <a href="/home">
                      <img
                        src="https://github.com/dphil2284/harbor-class-02/blob/master/app/image/dphi-logo__.png?raw=true"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                </div>
              </Column>
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
                      display: "inline-block",
                      position: "absolute",
                      marginLeft: "5%",
                      transform: "translateY(-50%)",
                      top: "50%"
                    }}
                  >
                    <a href="/work" style={{ textDecoration: "none" }}>
                      <span style={{ fontSize: "22px", color: "#d1d1d1" }}>
                        Work
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
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>About</span>
                    <div
                      style={{
                        height: "1px",
                        width: "20px",
                        marginTop: "10%",
                        backgroundColor: "#4500fc"
                      }}
                    />
                  </div>
                </div>
              </Column>
            </Row>
            <Row style={{ marginTop: "10%" }}>
              <Column col="12">
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    position: "relative",
                    height: "80px"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "68%",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "35px",
                        color: "#150efa",
                        fontFamily: "Nanum Myeongjo",
                        letterSpacing: "-2px",
                        fontWeight: 600,
                        display: "block"
                      }}
                    >
                      당신의 생각을 보다 가치롭게 만들기 위해 노력합니다.
                    </span>
                  </div>
                </div>
              </Column>
            </Row>
            <Row>
              <Column col="12" style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    transform: "translateX(-50%)",
                    left: "50%",
                    marginTop: "3%",
                    width: "68%"
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "1px",
                      backgroundColor: "#150efa",
                      position: "absolute"
                    }}
                  />
                  <p>
                    <span
                      style={{
                        fontFamily: "Nanum Myeongjo",
                        color: "#3b3b3b",
                        fontSize: "20px",
                        letterSpacing: "-0.5px",
                        display: "block",
                        lineHeight: "39px",
                        marginTop: "8%"
                      }}
                    >
                      고객님의 소중한 고민과 제가 가진 디자인에 대한 열정으로 최고의 결과물을 만들고자 합니다.
                    </span>
                  </p>
                  <p>
                    <span
                      style={{
                        fontFamily: "Nanum Myeongjo",
                        color: "#3b3b3b",
                        fontSize: "20px",
                        letterSpacing: "-0.5px",
                        display: "block",
                        lineHeight: "39px",
                        textAlign: "start"
                      }}
                    >
                      홈페이지 운영 및 구축 / 사업 전반에 대한 디자인 작업으로 사업성에 대한 이해가 빠르고, 클라이언트가 원하는 부분과 디자인 트렌드를 반영하여 대중성 있는 결과물을 도출하고자 합니다. 끊임없는 탐구 정신은 더 나은 가치를 만들어준다고 생각합니다. 끊임 없이 더 나음을 추구하고 고민하여 최고의 결과물을 도출하고자 하는 디자이너 이현성입니다.
                    </span>
                    <div style={{ marginTop: "5%" }}>
                      <span
                        style={{
                          fontFamily: "Nanum Myeongjo",
                          color: "#3b3b3b",
                          fontSize: "25px",
                          letterSpacing: "-0.5px",
                          display: "inline-block",
                          verticalAlign: "middle"
                        }}
                      >
                        Behance
                      </span>
                      <span
                        style={{
                          fontFamily: "Nanum Myeongjo",
                          color: "#3b3b3b",
                          fontSize: "3px",
                          display: "inline-block",
                          marginLeft: "2%",
                          verticalAlign: "middle"
                        }}
                      >
                        ●
                      </span>
                      <span
                        style={{
                          fontFamily: "Nanum Myeongjo",
                          color: "#3b3b3b",
                          fontSize: "25px",
                          letterSpacing: "-0.5px",
                          display: "inline-block",
                          marginLeft: "10px",
                          verticalAlign: "middle"
                        }}
                      >
                        Pinterest
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "Nanum Myeongjo",
                        color: "#150efa",
                        fontSize: "16px",
                        letterSpacing: "-0.5px",
                        display: "block",
                        lineHeight: "39px",
                        marginTop: "5%"
                      }}
                    >
                      E-Mail. d_phil@naver.com
                    </span>
                  </p>
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
                    height: "40px",
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    marginLeft: "55%",
                    right: "0%",
                    width: "40px"
                  }}
                >
                  <i
                    className="fab fa-dribbble"
                    style={{
                      fontSize: "24px",
                      top: "50%",
                      position: "relative",
                      transform: "translate(-50%, -50%)",
                      left: "50%",
                      color: "#ffffff"
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "40px",
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    right: "3.5%",
                    width: "40px"
                  }}
                >
                  <i
                    className="fab fa-twitter"
                    style={{
                      fontSize: "24px",
                      top: "50%",
                      position: "relative",
                      transform: "translate(-50%, -50%)",
                      left: "50%",
                      color: "#ffffff"
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "40px",
                    top: "50%",
                    position: "absolute",
                    transform: "translateY(-50%)",
                    right: "7%",
                    width: "40px"
                  }}
                >
                  <i
                    className="fab fa-facebook-f"
                    style={{
                      fontSize: "24px",
                      top: "50%",
                      position: "relative",
                      transform: "translate(-50%, -50%)",
                      left: "50%",
                      color: "#ffffff"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Column>

      </div>
    ); // eslint-disable-line
  }
}

export default Page171;
