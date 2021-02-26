import styled, { css } from "styled-components";

const label = "black";
const primaryColor = "#0C509F";
const primaryColorDark = "#08305F";

const breakpoints = {
  xs: "@media only screen and (min-width: 320px)",
  xs2: "@media only screen and (min-width: 375px)",
  sm: "@media only screen and (min-width: 576px)",
  md: `@media only screen and (min-width: 768px)`,
  lg: "@media only screen and (min-width: 992px)",
  lgDown: "@media only screen and (max-width: 991px)",
  xl: "@media only screen and (min-width: 1200px)"
};

const column = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  grid-column-gap: 5px;
`;

const row = css`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 10px;
`;

const cell = css`
  height: 64px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.lg} {
    height: 48px;
  }
`;

const srOnly = css`
  /* https://gist.github.com/ffoodd/000b59f431e3e64e4ce1a24d5bb36034 */
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

export const Slots = styled.div`
  ${row}
  padding: 20px 15px;

  ${breakpoints.lg} {
    ${column}
  }
`;

export const Slot = styled.li`
  position: relative;
`;

export const SlotDate = styled.span`
  ${(props) => props.screenReader && srOnly}
`;
export const SlotTime = styled.span`
  ${(props) => props.screenReader && srOnly}
`;
export const SlotPrice = styled.span``;

export const Day = styled.ol`
  ${row}
  list-style: none;

  ${breakpoints.lgDown} {
    display: none;

    ${(props) =>
      props.isVisible &&
      css`
        display: grid;
        position: relative;

        /* we should design a proper focus state! */
        &:focus:after {
          content: "";
          border: 1px dotted #d8d8d8;
          top: -3px;
          position: absolute;
          bottom: -3px;
          right: -3px;
          left: -3px;
          z-index: -1;
        }
      `}
  }
`;

export const Dates = styled.ol`
  display: flex;

  ${(props) =>
    props.mobile &&
    css`
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch; /* this adds scroll momentum */
      margin-bottom: 10px;
      border-bottom: 1px solid #d8d8d8;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;

      ${breakpoints.lg} {
        display: none;
      }
    `}
`;

export const Date = styled.li`
  ${cell}
  width: 127px;
  height: 48px;

  ${breakpoints.lg} {
    width: 100%;
  }

  ${(props) =>
    props.as === "button" &&
    css`
      background: none;
      color: #737373;
      border: 2px solid transparent;
      border-radius: 2px;
      padding: 12px 13px;
      white-space: nowrap;
      width: 100%;

      &:not(:last-child) {
        margin-right: 5px;
      }

      &[aria-selected="true"] {
        color: #262626;
        border-color: ${primaryColor};
      }
    `}

  ${(props) =>
    props.desktop &&
    css`
      display: none;

      ${breakpoints.lg} {
        display: flex;
      }
    `}
`;

export const Times = styled.ol`
  ${row}
  display: none;

  ${breakpoints.lg} {
    display: grid;
  }
`;

export const Time = styled.span`
  ${cell}

  font-weight: bold;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 4px;

  ${breakpoints.lg} {
    font-weight: normal;
  }

  ${(props) =>
    props.mobile &&
    css`
      ${breakpoints.lg} {
        display: none;
      }
    `}
`;

export const Label = styled.label`
  ${cell}
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  color: ${label};
  background-color: #f2f2f2;
  border: 2px solid #f2f2f2;
  border-radius: 2px;
  margin: 0;
  cursor: pointer;
  transition: all 120ms ease-in;

  ${breakpoints.lg} {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
    border-radius: 4px;
  }

  &:hover,
  &:focus {
    background-color: ${primaryColorDark};
    border-color: ${primaryColorDark};
    color: white;
    transition: all 120ms ease-in;
  }

  ${(props) =>
    props.checked &&
    css`
      background-color: ${primaryColor};
      border-color: ${primaryColor};
      box-shadow: inset 0px 0px 0 2pt ${primaryColor};
      color: white;

      &:hover,
      &:focus {
        background-color: ${primaryColor};
        border-color: ${primaryColor};
      }

      span {
        color: white;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: white;
      border-color: #d4d4d4;
      color: #404040;
      pointer-events: none;

      ${breakpoints.lg} {
        display: flex;
      }
    `}
`;

export const NativeRadioInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  overflow: hidden;
  position: absolute;
  left: 0;
  white-space: nowrap;
  width: 100%;
  height: 64px;

  ${breakpoints.lg} {
    height: 48px;
  }
`;
