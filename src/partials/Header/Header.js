import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { Title } from "./Title";
import { Social } from "./Social";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between
  align-items: center;
  border-bottom: 2px solid rgb(1, 87, 112);
  white-space: nowrap;
  user-select: none;
`;

export const Header = props => (
  <StyledHeader>
    <Logo />
    <Title />
    <Social />
  </StyledHeader>
);
