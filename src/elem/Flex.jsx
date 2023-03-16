import React from "react";
import styled from "styled-components";

const Flex = ({ children, css }) => {
  return <StyledFlex css={css}>Flex</StyledFlex>;
};

const StyledFlex = styled.div`
  ${({ css }) => ({ ...css })}
  display: flex;
`;

export default Flex;
