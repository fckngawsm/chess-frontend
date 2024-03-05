import logo from "../../images/logo.svg";
import { StyledHeader, StyledLogo, StyledTitle } from "./styled";
export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} />
      <StyledTitle>Chess</StyledTitle>
    </StyledHeader>
  );
};
