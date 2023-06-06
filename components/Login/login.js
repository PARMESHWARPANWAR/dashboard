import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  const login = () => {
    router.push("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="board">Board.</div>
      </div>
      <div className="right-section">
        <div className="sign-text">Sign in</div>
        <div className="account-text">Sign in with account</div>
        <div className="sign">
          <div className="google-sign">
            <img className="google-image" src="./google.svg" />
            <button className="only-google-sign" onClick={login}>
              {" "}
              Sign in with Google
            </button>
          </div>
          <div className="apple-sign">
            <img className="apple-image" src="./apple.svg" alt="google logo" />
            <button className="only-google-sign" onClick={login}>
              Sign in with apple
            </button>
          </div>
        </div>
        <div className="form">
          <div className="label-email">
            <label>Email address</label>
          </div>
          <input className="input-username" required />

          <label className="label-pass">Password</label>
          <input className="input-password" required />
          <div className="forgot-password">Forgot Password?</div>
          <button type="button" class="btn">
            <span className="btn-text" onClick={login}>
              Sign In
            </span>
          </button>
        </div>
        <div className="not-account">
          Don't have an account? <span className="register">Register here</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
