import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import { HeaderMenu } from "./HeaderMenu";
import {
  StyledHeader,
  StyledLogo,
  StyledNavigationItem,
  StyledNavigationList,
  StyledProfileNavigation,
  StyledTitle,
  StyledWrapperInformationHeader,
  StyledWrapperLogo,
} from "./styled";
export const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAndNavite = (link: string) => {
    setAnchorEl(null);
    navigate(link);
  };
  return (
    <StyledHeader>
      <StyledWrapperLogo>
        <StyledLogo src={logo} />
        <StyledTitle>Chess</StyledTitle>
      </StyledWrapperLogo>

      <StyledWrapperInformationHeader>
        <StyledNavigationList>
          <StyledNavigationItem
            style={({ isActive }) => {
              return {
                color: isActive ? "#F8F8F8" : "#606062",
              };
            }}
            to="play"
          >
            Play
          </StyledNavigationItem>
          <StyledNavigationItem
            style={({ isActive }) => {
              return {
                color: isActive ? "#F8F8F8" : "#606062",
              };
            }}
            to="watch"
          >
            Watch
          </StyledNavigationItem>
          <StyledNavigationItem
            style={({ isActive }) => {
              return {
                color: isActive ? "#F8F8F8" : "#606062",
              };
            }}
            to="news"
          >
            News
          </StyledNavigationItem>
          <StyledNavigationItem
            style={({ isActive }) => {
              return {
                color: isActive ? "#F8F8F8" : "#606062",
              };
            }}
            to="blog"
          >
            Blog
          </StyledNavigationItem>
          <StyledProfileNavigation onClick={handleClick}>
            Profile
          </StyledProfileNavigation>
          <HeaderMenu
            anchorEl={anchorEl}
            open={open}
            handleClose={handleCloseAndNavite}
          />
        </StyledNavigationList>
      </StyledWrapperInformationHeader>
    </StyledHeader>
  );
};
