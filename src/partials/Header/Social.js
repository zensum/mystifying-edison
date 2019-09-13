import React from "react";
import styled from "styled-components";

import { Icon } from "../../components/Icon";

const StyledSocial = styled.div`
  a {
    color: #333;
    text-decoration: none; /* no underline */
  }

  & > a + a {
    margin-left: 5px;
  }
`;

export const Social = props => {
  return (
    <StyledSocial>
      <a href="https://github.com/zensum" rel="noopener noreferrer" target="_blank"><Icon type="social-github" /></a>
      <a href="https://www.linkedin.com/company/zensum-ab/about/" rel="noopener noreferrer" target="_blank"><Icon type="social-linkedin" /></a>
      <a href="https://www.zensum.se" rel="noopener noreferrer" target="_blank"><Icon type="globe" /></a>
    </StyledSocial>
  );
};
