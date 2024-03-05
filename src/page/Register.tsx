import { Auth } from "../components/Auth/Auth";
import { StyledAuthInput } from "../components/Auth/styled";

export const Register = () => {
  return (
    <Auth title="Sign up">
      <StyledAuthInput placeholder="enter your name" />
      <StyledAuthInput placeholder="enter your email" />
      <StyledAuthInput placeholder="create password" />
    </Auth>
  );
};
