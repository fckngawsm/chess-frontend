import React from "react";
import {
  StyledAuthLink,
  StyledAuthTitle,
  StyledAuthWrapper,
  StyledAuthWrapperForm,
  StyledKnightImage,
  StyledRedirectText,
} from "./styled";

import authKnightLeft from "../../images/auth-knight_left.svg";
import authKnightRight from "../../images/auth-knight_right.svg";

/**
 * Компонент аутентификации.
 * @component
 * @param {string} props.title - Заголовок компонента.
 * @param {string} props.textRedirect - Текст для ссылки перенаправления.
 * @param {string} props.navigateLink - Ссылка для перенаправления.
 * @param {string} props.navigateText - Текст ссылки перенаправления.
 */

interface AuthProps {
  children: React.ReactNode;
  title: string;
  textRedirect: string;
  navigateLink: string;
  navigateText: string;
}

export const Auth = ({
  children,
  title,
  textRedirect,
  navigateLink,
  navigateText,
}: AuthProps) => {
  return (
    <StyledAuthWrapper>
      <StyledKnightImage src={authKnightLeft} />
      <StyledKnightImage src={authKnightRight} isSecond />
      <StyledAuthTitle>{title}</StyledAuthTitle>
      <StyledAuthWrapperForm>{children}</StyledAuthWrapperForm>
      <StyledRedirectText>
        {textRedirect}
        <StyledAuthLink to={navigateLink}>{navigateText}</StyledAuthLink>
      </StyledRedirectText>
    </StyledAuthWrapper>
  );
};
