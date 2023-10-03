// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const {createUser}= useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email")
    const password = form.get("password")
    const name= form.get("name")
    const photo = form.get("photo")

    console.log(email,password,name,photo);

    createUser(email,password)
    .then(result => {
        console.log(result.user);
    })
    .catch(error =>console.error(error))
  };


  return (
    <div>
      <Navbar></Navbar>
      <div className="card  lg:w-1/2 mx-auto">
        <div className="card-body   space-y-10 ">
          <h2 className="text-3xl font-semibold text-center ">
            Register your account
          </h2>
          <hr className="h-1 w-3/4 mx-auto" />

          <form className=" space-y-4 " onSubmit={handleRegister}>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>

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
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mt-4">
            DAlready have an account?
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
