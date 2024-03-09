import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CustomTextField } from "../Сustom/CustomTextField";

export const StyledAuthWrapper = styled(Container)`
  width: 100%;
  padding: 0 0 80px 60px;
  height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledAuthTitle = styled.h2`
  font-weight: 700;
  font-size: 55px;
  line-height: 1.1;
  text-align: center;
  margin: 0;
  margin-bottom: 45px;
`;

export const StyledAuthWrapperForm = styled.div`
  width: 500px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const StyledAuthInput = styled(CustomTextField)``;

export const StyledAuthButtonSubmit = styled(Button)`
  width: 320px;
  outline: none;
  border: none;
  padding: 8px;
  text-align: center;
`;

export const StyledKnightImage = styled.img<{ isSecond?: boolean }>`
  position: absolute;
  top: 80px;
  right: ${({ isSecond }) => (isSecond ? "60px" : "auto")};
  left: ${({ isSecond }) => (isSecond ? "auto" : "60px")};
`;

export const StyledRedirectText = styled.h3`
  gap: 5px;
  display: flex;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(55, 53, 47, 0.65);
  font-weight: 400;
`;

export const StyledAuthLink = styled(Link)`
  text-decoration: underline;
  color: inherit;
`;
