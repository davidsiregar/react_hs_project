import React, { Fragment } from "react";
import "./Register.css";

const Register = () => {
  return (
    <Fragment>
      <div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<input type="text" id="registName" placeholder="Name" />
			<input type="email" id="registEmail" placeholder="Email" />
			<input type="password" id="registPassword" placeholder="Password" />
			<button type="button" onclick="signUp()">Sign Up</button>
		</form>
	</div>



	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<input type="email" id="email" placeholder="Email" />
			<input type="password" id="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button type="button" onclick="signIn()">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal details</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hi There!</h1>
				<p>Enter your personal details to open an account with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    </Fragment>
  );
};

export default Register;
