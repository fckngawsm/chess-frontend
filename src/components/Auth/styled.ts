import { Container, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledAuthWrapper = styled(Container)`
  width: 100%;
  padding: 0 0 80px 60px;
`;

export const StyledAuthTitle = styled.h2`
  font-weight: 700;
  font-size: 55px;
  line-height: 1.1;
  text-align: center;
`;

export const StyledAuthWrapperForm = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const StyledAuthInput = styled(TextField)``;
