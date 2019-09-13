import React from "react";
import styled from "styled-components";
import { ReactComponent as ZensumLogo } from "../../res/img/zensum.svg";

const StyledLogo = styled.div`
  display: block;
  width: 160px;
  margin: 32px 0;
`;

export const Logo = props => (
  <StyledLogo>
    <ZensumLogo />
  </StyledLogo>
);
