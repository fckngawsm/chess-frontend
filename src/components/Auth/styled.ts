import { Container } from "@mui/material";
import styled from "styled-components";
import { CustomTextField } from "../Сustom/CustomTextField";

export const StyledAuthWrapper = styled(Container)`
  width: 100%;
  padding: 0 0 80px 60px;
  height: 100vh;
  display: flex !important;
  justify-content: center; /* Горизонтальное выравнивание */
  align-items: center; /* Вертикальное выравнивание */
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
