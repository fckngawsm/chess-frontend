import { Auth } from "../components/Auth/Auth";
import {
  StyledAuthButtonSubmit,
  StyledAuthInput,
} from "../components/Auth/styled";

export const Register = () => {
  return (
    <Auth
      title="Sign up"
      navigateLink="/sign-in"
      navigateText="Log in"
      textRedirect="Already have an account?"
    >
      <StyledAuthInput placeholder="Enter your nickname" />
      <StyledAuthInput placeholder="Enter your email" type="email" />
      <StyledAuthInput placeholder="Create password" type="password" />
      <StyledAuthButtonSubmit>Continue</StyledAuthButtonSubmit>
    </Auth>
  );
};
