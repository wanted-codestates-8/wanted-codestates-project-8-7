import styled from "styled-components";

type Prop = {
  width: number;
  animationSpeed: number;
};

export default function ProgressBar({ width, animationSpeed }: Prop) {
  return (
    <ProgressBarStyle width={width} animationSpeed={animationSpeed}>
      <span></span>
    </ProgressBarStyle>
  );
}

const ProgressBarStyle = styled.div<Prop>`
  display: flex;
  align-items: center;
  height: 20px;
  position: relative;
  background: #555;
  border-radius: 25px;
  padding: 10px;
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  overflow: hidden;

  span {
    position: absolute;
    /* padding: 6px; */
    width: ${(props) => `${props.width}%`};
    display: block;
    height: 100%;
    left: 0;
    border-radius: 8px;
    background-color: rgb(33, 135, 243);

    transition: width ${(props) => `${props.animationSpeed}`}ms ease-in-out;

    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }
`;
