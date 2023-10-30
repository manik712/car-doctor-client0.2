import login from "../../../assets/images/login/login.svg";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
    .then(result =>{
      const user = result.user;
          console.log(user);

    })
    .catch((error)=>console.log(error)

    )

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm  bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold text-slate-400">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold text-slate-400">
                  Email
                </span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold text-slate-400">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#FF3811] text-white">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="font-bold">Or Sign In with</p>
            <div className="space-x-4 mt-4">
              <button>
                <BiLogoFacebook size={25}></BiLogoFacebook>
              </button>
              <button>
                <AiOutlineInstagram size={25}></AiOutlineInstagram>
              </button>
              <button>
                <FcGoogle size={25}></FcGoogle>
              </button>
            </div>
            <div className="flex justify-center mb-5">
              <p className="font-bold text-slate-400">
                Already have an account?
              </p>
              <Link to="/login">
                <button className="text-red-600 font-bold">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
