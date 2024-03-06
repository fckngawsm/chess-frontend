import { Auth } from "../components/Auth/Auth";
import {
  StyledAuthButtonSubmit,
  StyledAuthInput,
} from "../components/Auth/styled";

export const Login = () => {
  return (
    <Auth
      title="Log in"
      navigateLink="/sign-up"
      navigateText="Sign in"
      textRedirect="Doesn't have account?"
    >
      <StyledAuthInput placeholder="Enter your email" type="email" />
      <StyledAuthInput placeholder="Create password" type="password" />
      <StyledAuthButtonSubmit>Continue</StyledAuthButtonSubmit>
    </Auth>
  );
};
