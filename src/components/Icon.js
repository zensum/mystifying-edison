import React from "react";
import styled from "styled-components";
import "simple-line-icons/css/simple-line-icons.css";

const StyledIcon = styled.span`
  flex-shrink: 0;
  font-size: ${props => (props.small ? '12px' : '18px')};
`;

export const Icon = ({ type, className, ...props }) => (
  <StyledIcon className={`${className} icon-${type}`} {...props} />
);
