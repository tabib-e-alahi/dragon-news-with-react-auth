// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(form.get("email"));
    
   /*  step-8.2*/
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="card  lg:w-1/2 mx-auto">
        <div className="card-body   space-y-10 ">
          <h2 className="text-3xl font-semibold text-center ">
            Login your account
          </h2>
          <hr className="h-1 w-3/4 mx-auto" />

          <form className=" " onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mt-4">
            Do not have an account?
            <Link className="text-blue-600 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
