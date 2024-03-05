import React from "react";
import {
  StyledAuthTitle,
  StyledAuthWrapper,
  StyledAuthWrapperForm,
} from "./styled";

interface AuthProps {
  children: React.ReactNode;
  title: string;
}

export const Auth = ({ children, title }: AuthProps) => {
  return (
    <StyledAuthWrapper>
      <StyledAuthTitle>{title}</StyledAuthTitle>
      <StyledAuthWrapperForm>{children}</StyledAuthWrapperForm>
    </StyledAuthWrapper>
  );
};
