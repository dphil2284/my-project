import { css } from "styled-components";

const style = css`
  body {
  }

  /* @media screen and (max-width: 600px) {
    .first-col {
      background-color: blue !important;
      width: 100% !important;
    }
  } */

  @media screen and (min-width: 300px) and (max-width: 1000px) {
    .first-col {
      background-color: green !important;
      width: 100% !important;
    }
    .second-col {
      background-color: green !important;
      position: relative;
      width: 100% !important;
    }
    .second-col2 {
      height: 59.8854vw !important;
      margin-top: 4vw;
    }
    .third-col {
      margin-top: 4vw;
      position: relative !important;
      width: 100% !important;
    }
    .third-col2 {
      background-color: red !important;
      margin-top: 0;
    }

    .fourth-col {
      background-color: green !important;
      position: relative;
      top: 0 !important;
      margin-top: 5vw;
      width: 100% !important;
    }
  }
`;

export default style;
