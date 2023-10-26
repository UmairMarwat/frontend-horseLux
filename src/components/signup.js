function Signup() {
  return (
    <div className="formbg bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
      <div className="w-[80%] p-5 h-auto  flex flex-col gap-y-4 bg-opacity-70 bg-[#000] rounded-2xl ">
        <h1 className="text-4xl text-white mb-4 font-bold">Create Account!</h1>
        <h3 className="mb-4 text-3xl text-white font-medium ">
          Sign Up to Get Started
        </h3>
        <form action="" className="grid grid-cols-2 justify-center gap-x-20">
          <div className="flex flex-col">
            <label htmlFor="Name" className=" text-white ">
              Name
            </label>
            <input
              type="text"
              placeholder="umair"
              className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Name" className=" text-white">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Name" className=" text-white">
              Phone No
            </label>
            <input
              type="text"
              placeholder="Phone No"
              className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Name" className=" text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Name" className=" text-white">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="confirm Password"
              className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
            />
          </div>
          <div className="text-center mt-2 w-[30%] flex flex-col gap-y-3 m-auto">
            <button className="w-full py-2 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
