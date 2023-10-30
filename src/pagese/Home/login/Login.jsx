import login from "../../../assets/images/login/login.svg";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center lg:text-left w-1/2">
          <img src={login} alt=""/>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm  bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold">Login now</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold text-slate-400">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-extrabold text-slate-400">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover font-extrabold text-slate-400"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-[#FF3811] text-white">
                Sign In
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
              <p className="font-bold text-slate-400"> Do not have an account?</p>
              <Link to="/signUp"><button className="text-red-600 font-bold">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
