import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  const login = () => {
    router.push("/dashboard");
  };

  return (
    <div className="md:flex ">
      <div className="left-section bg-[#000000] md:flex justify-center items-center hidden">
        <div className="board">Board.</div>
      </div>
      <div className="bg-[#000000] text-base flex justify-center items-center h-[200px] md:hidden">
        <div className="text-center text-white my-auto text-4xl">Board.</div>
      </div>

      <div className="right-section bg-[#F5F5F5] w-full md:w-2/5 pt-6 md:pt-0">
        <div className="sign-text text-black text-center md:absolute md:w-[131px]">
          Sign in
        </div>
        <div className="account-text md:relative md:w-[161px] text-center">
          Sign in with account
        </div>
        <div className="sign justify-center flex space-x-3 mt-4 md:mt-0 md:space-x-0">
          <div className="google-sign md:absolute bg-[#FFFFFF] rounded-full md:rounded-[10px] h-[30px] w-[175px] p-[3px] justify-center items-center gap-[10px]">
            <img className="google-image w-[20px]" src="./google.svg" />
            <button className="only-google-sign" onClick={login}>
              {" "}
              Sign in with Google
            </button>
          </div>
          <div className="apple-sign md:absolute bg-[#FFFFFF] rounded-full md:rounded-[10px] h-[30px] w-[175px] p-[3px] gap-[10px] justify-center items-center">
            <img
              className="apple-image w-[20px]"
              src="./apple.svg"
              alt="google logo"
            />
            <button className="only-google-sign" onClick={login}>
              Sign in with apple
            </button>
          </div>
        </div>
        <div className="form bg-[#FFFFFF] md:relative mx-4 mt-4 md:mx-0 md:mt-[5px] md:w-[385px] h-[317px] rounded-[20px]">
          <div className="font-sans pl-5 md:pl-[30px] pt-[30px] font-normal text-base not-italic">
            <label>Email address</label>
          </div>
          <input
            className="h-[40px] w-[90%] md:w-[325px] mx-4 md:ml-[30px] mt-[10px] mb-[10px] bg-[#F5F5F5] rounded-[10px]"
            required
          />
          <label className="pl-5 md:pl-[30px] pt-[20px] mt-[20px] font-sans font-normal text-[#000000] text-base">
            Password
          </label>
          <input
            className="input-password h-[40px] w-[90%] md:w-[325px] mx-4 md:ml-[30px] mt-[10px] bg-[#F5F5F5] rounded-[10px]"
            required
          />
          <div className="pl-5 mt-4 md:mt-0 md:pl-0 forgot-password md:absolute text-[#346BD5] md:w-[124px] h-[19px] text-base font-sans font-normal not-italic">
            Forgot Password?
          </div>
          <button
            type="button"
            className="btn mx-5 mt-6 md:mx-0 md:mt-0 h-[40px] w-[90%] md:w-[325px] md:absolute bg-[#000000] rounded-[10px]"
          >
            <span
              className="btn-text text-center w-[101.96px] h-[21.71px] text-[#FFFFFF] not-italic text-base"
              onClick={login}
            >
              Sign In
            </span>
          </button>
        </div>
        <div className="not-account ml-5 mt-2 md:ml-0 md:mt-0 md:relative font-sans not-italic font-normal text-[#858585] text-base">
          Don't have an account?{" "}
          <span className="text-[#346BD4]">Register here</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
