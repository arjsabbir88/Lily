import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

export const ForgotPass = () => {
  const { forgotPassword } = useContext(AuthContext);
  const handleForgotPass = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgotPassword(email)
      .then(() => {
        toast.success("Send Email Successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        if (errorCode) {
          return toast.error("Something was wrong!! Try Again");
        }
      });
  };
  return (
    <form onSubmit={handleForgotPass} className="w-full flex justify-center items-center my-15">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-8">
        <label className="label">Name</label>
        <input
          type="Name"
          name="name"
          className="input"
          placeholder="Name"
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />
        <button
            type="submit"
          className="btn btn-success my-4"
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};
