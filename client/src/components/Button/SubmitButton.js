import styled, { css } from "styled-components";
import BaseButton from "./BaseButton";

// props: inline, primary, primarylight, secondary, tertiary

const SubmitButton = styled(BaseButton).attrs(({ size, inline }) => {
  return { size, inline };
})`
  ${(props) =>
    props.disabled &&
    css`
      background-color: #8e87f4 !important;
      color: #fff !important;
    `}
  width: 100%;
  height: 4.7rem;
`;

export default SubmitButton;
