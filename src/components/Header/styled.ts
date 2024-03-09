import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 25px 60px;
  justify-content: space-between;
  align-items: center;
  cursor: default;
`;

export const StyledLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
  margin-left: 10px;
`;

export const StyledWrapperInformationHeader = styled.nav`
  width: 280px;
`;

export const StyledNavigationList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavigationItem = styled(NavLink)`
  text-decoration: none;
`;

export const StyledProfileNavigation = styled.li`
  color: #606062;
  cursor: pointer;
`;

export const StyledWrapperLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
