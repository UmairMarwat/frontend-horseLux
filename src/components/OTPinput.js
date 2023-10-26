import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    if (!isNaN(e.target.value)) {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;
      setOtp(newOtp);

      // Move focus to the next input if available
      if (index < inputRefs.length - 1 && e.target.value !== "") {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  return (
    <div className="formbg bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
      <div className="w-[40%] p-5 h-auto   flex flex-col  gap-y-2 bg-opacity-70 bg-[#000] rounded-2xl ">
        <h1 className="text-4xl text-white text-center mb-4 font-bold">
          Forget Password
        </h1>
        <h3 className="mb-4  text-white text-center font-medium ">
          Code has been Send to your Email
        </h3>
        <form action="" className="grid grid-cols justify-center gap-x-12">
          <div className="flex justify-center items-center ">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                className="w-10 h-10 m-2 p-2 text-center border rounded focus:outline-none focus:border-blue-400"
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>

          <div class="flex justify-center items-center w-full">
            <button class="text-white text-[16px] font-[600]">
              Resend Code in 56s
            </button>
          </div>

          <div className="text-center mt-2 w-[30%] flex flex-col gap-y-3 m-auto">
            <button className="w-full  py-2 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]">
              <NavLink to="/resetpassword">Verify</NavLink>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPInput;
