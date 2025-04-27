import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values); // Correct way: values from Formik
  };

  return (
    <div>
      <h2 className="font-bold font-chivo text-[40px] leading-[30px] md:text-heading-3 mb-[50px]">
        Welcome back.
      </h2>
      <button type="button">
        <div className="flex items-center z-10 relative transition-all duration-200 group py-[13px] md:px-[120px] px-[80px] rounded-md bg-white text-gray-500 hover:text-gray-900 flex-row-reverse w-fit mb-[30px]">
          <span className="block text-inherit w-full h-full rounded-md text-md font-chivo font-semibold">
            Sign In with Google
          </span>
          <img
            className="mr-5"
            src="assets/images/icons/Icon-google.svg"
            alt="google icon"
          />
        </div>
      </button>
      <div className="flex items-center justify-center gap-[7px] mb-[25px]">
        <div className="bg-gray-300 w-[50px] h-[2px]"></div>
        <p className="text-text text-gray-500">Or, sign in with your email</p>
        <div className="bg-gray-300 w-[50px] h-[2px]"></div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form
            className="bg-white w-full p-8 shadow-3 rounded-[6px] md:p-12"
            onSubmit={handleSubmit}
          >
            <div className="relative mb-6">
              <Field
                className="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                type="email"
                placeholder="Your email *"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="relative mb-6 last-of-type:mb-4">
              <Field
                className="outline-none flex-1 pr-10 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password *"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              <button
                type="button"
                className="absolute top-1/2 right-[12px] transform -translate-y-1/2 text-gray-500 hover:text-green-900"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <VisibilityOffIcon fontSize="small" />
                ) : (
                  <VisibilityIcon fontSize="small" />
                )}
              </button>
            </div>

            <div className="block w-fit ml-auto -mt-5 mb-5">
              <div className="text-sm font-bold text-gray-500 hover:underline hover:text-c-green-900">
                Forgot password?
              </div>
            </div>

            <button
              className="mb-6 w-full text-white bg-c-green-900 transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75"
              type="submit"
            >
              Continue
            </button>

            <div className="flex gap-2">
              <p className="text-text text-gray-500">Don't have an account?</p>
              <div
                className="text-c-green-900 hover:opacity-70 hover:cursor-pointer"
                onClick={() => navigate("/registration")} 
              >
                <p className="text-text">Sign up</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
