import { NavLink } from "react-router-dom";
function Forgetpassword() {
  return (
    <div className="formbg bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
      <div className="w-[40%] p-5 h-auto   flex flex-col  gap-y-2 bg-opacity-70 bg-[#000] rounded-2xl ">
        <h1 className="text-4xl text-white text-center mb-4 font-bold">
          Forget Password
        </h1>
        <h3 className="mb-4  text-white text-center font-medium ">
          Enter the email we will send OTP on your email
        </h3>
        <form action="" className="grid grid-cols justify-center gap-x-12 ">
          <div className="flex flex-col ">
            <label htmlFor="Name" className=" text-white">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
            />
          </div>

          <div className="text-center mt-2 w-[50%] flex flex-col gap-y-3 m-auto">
            <button className="w-full text-center  py-3 px-4 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]">
              <NavLink to="/otpinput">Continue</NavLink>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgetpassword;
