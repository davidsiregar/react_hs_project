import React , {Fragment} from "react";
import "./Login.css"
const Login = () => {
  return (
    <Fragment>
      <div className="content">
        <div className="container" id="container">
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="button">Sign In</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
