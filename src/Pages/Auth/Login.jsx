import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Loading } from "../../Components/Loading/Loading";

export const Login = () => {
  const {signIn,signInWithGoogle}= useContext(AuthContext);
  const navigate = useNavigate();
  const [error,setError]= useState();



  const handleLogin=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    setError('');

    signIn(email,password)
    .then(()=>{
        // const user = result.user;
      toast.success("LogIn SuccessFully");
      navigate('/')
    }).catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      toast.error("Something Was Wrong");

      // ..
    })

  }

  // const handleGoogleLogin = () => {
  //   setError('');

  //   signInWithGoogle()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       toast.success('Google LogIn Successfully');
  //       navigate('/');
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       let userFriendlyMessage = errorMessage;
  //       if (errorCode === 'auth/popup-closed-by-user') {
  //         userFriendlyMessage = 'Google login was cancelled';
  //       } else if (errorCode === 'auth/account-exists-with-different-credential') {
  //         userFriendlyMessage = 'Account exists with a different credential';
  //       }
  //       setError(userFriendlyMessage);
  //       toast.error(userFriendlyMessage);
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  const handleGoogleLogin = () => {
    setError(''); // Clear any existing error
  
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log('Logged in user:', user);
        toast.success('Google login successful!');
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Google login error:', errorCode, errorMessage);
  
        let userFriendlyMessage;
  
        switch (errorCode) {
          case 'auth/popup-closed-by-user':
            userFriendlyMessage = 'Google login was cancelled by the user.';
            break;
          case 'auth/account-exists-with-different-credential':
            userFriendlyMessage = 'An account already exists with a different credential.';
            break;
          default:
            userFriendlyMessage = 'Something went wrong. Please try again.';
        }
  
        setError(userFriendlyMessage);
        toast.error(userFriendlyMessage);
      });
  };
  

  return (
    <form onSubmit={handleLogin} className="flex justify-center h-[100vh] w-h-screen items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-8">
        {/* <legend className="">Login</legend> */}
        <p className="text-center text-xl font-bold">Login with</p>

        <label className="label">Email</label>
        <input type="email" name="email" className="input" placeholder="Email" required/>

        <label className="label">Password</label>
        <input type="password" name="password" className="input" placeholder="Password" required/>
        <div>
          <a className="link link-hover my-5">Forgot Password</a>
        </div>


        <button type="submit" className="btn btn-neutral mt-4">Login</button>
        {
          error? <p className="text-red-600 text-lg">{error}</p>:''
        }
        <p className="text-center">
          Don't have an Account{" "}
          <Link to="/auth/register" className="link hover-link text-red-500">
            Click Here
          </Link>
        </p>

        <h3 className="text-center text-xl my-5 font-bold">Or</h3>

        <button type='button' onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
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
