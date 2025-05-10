import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Loading } from "../../Components/Loading/Loading";
import { IoEye, IoEyeOff } from "react-icons/io5";

export const Register = () => {
  const { user, createUser, setUser, updateUser, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoUrl.value;
    const password = e.target.password.value;
    console.log(name, email, photoURL, password);

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (password < 6) {
      setError("Pass is too short");
    }

    if (!hasUppercase) {
      setError("Please Added at least one upper case");
    }
    if (!hasLowercase) {
      setError("Please Added at least one lower case");
    }
    if (error) {
      return toast.error("Something was wrong. Please Try again!!1");
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
        toast.success("Account Register SuccessFully");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center py-6 w-h-screen items-center shadow-2xl hover:Shadow-xl/30"
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-8">
        {/* <legend className="">Login</legend> */}
        <p className="text-center text-xl font-bold">Login with</p>

        {/* name */}
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Enter your Name"
          required
        />

        {/* Email */}
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />

        {/* for photoUrl */}
        <label className="label">Photo Url</label>
        <input
          type="text"
          name="photoUrl"
          className="input"
          placeholder="Photo Url"
          required
        />

        <label className="label">Password</label>
            {/* <input type="password" name='password' className="input" placeholder="Password" required/>
    
            <label className="label">Password</label>
            <input type="password" name='secondPassword' className="input" placeholder="Password" required/> */}
        <div style={{ position: "relative", width: "100%" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input"
            placeholder="Password"
            required
            style={{ paddingRight: "40px" }}
          />
          <span
            onClick={togglePassword}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </span>
        </div>
        {error ? <p className="text-red-600 text-sm">{error}</p> : ""}
        <button type="submit" className="btn btn-neutral mt-4">
          Register
        </button>
        <p className="text-center">
          Already have an Account{" "}
          <Link to="/auth/login" className="link hover-link text-red-500">
            Click Here
          </Link>
        </p>
        <h3 className="text-center text-xl my-5 font-bold">Or</h3>

        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          <p className="font-bold text-lg">Login with Google</p>
        </button>
      </fieldset>
    </form>
  );
};
