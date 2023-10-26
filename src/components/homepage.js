import OTPInput from "./OTPinput";
import Resetpassword from "./ResetPassword";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Signin from "./Signin";
import Forgetpassword from "./forgetpassword";
import Landingpage from "./landingpage";
import Signup from "./signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Homepage() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route element={<Landingpage />} path="/" />
        <Route element={<Signin />} path="/signup" />
        <Route element={<Signup />} path="/signin" />
        <Route element={<Forgetpassword />} path="/forgetpassword" />
        <Route element={<OTPInput />} path="/otpinput" />
        <Route element={<Resetpassword />} path="/resetpassword" />
      </Routes>
    </BrowserRouter>
  );
}

export default Homepage;
