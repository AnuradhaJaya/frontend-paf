import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../Redux/Auth/auth.action";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  fname: Yup.string().required("First name is required"),
  lname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("handle submit--> ", values);
    dispatch(registerUserAction(values));
    setSubmitting(false);
  };

  return (
    <div>
      <h2 className="font-bold font-chivo text-[40px] leading-[30px] md:text-heading-3 mb-[50px]">
        Let's join us
      </h2>
      <button type="button">
        <div className="flex items-center z-10 relative transition-all duration-200 group py-[13px] md:px-[120px] px-[80px] rounded-md bg-white text-gray-500 hover:text-gray-900 flex-row-reverse w-fit mb-[30px]">
          <span className="block text-inherit w-full h-full rounded-md text-md font-chivo font-semibold">
            Sign Up with Google
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
        <p className="text-text text-gray-500">Or, sign up with email</p>
        <div className="bg-gray-300 w-[50px] h-[2px]"></div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white w-full p-8 shadow-3 rounded-[6px] md:p-12">
            <div className="relative mb-6">
              <Field
                className="outline-none flex-1 pr-3 border caret-blue-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-blue-900 focus:border-[2px]"
                type="text"
                placeholder="Your Firstname *"
                name="fname"
              />
              <ErrorMessage
                name="fname"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="relative mb-6">
              <Field
                className="outline-none flex-1 pr-3 border caret-blue-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-blue-900 focus:border-[2px]"
                type="text"
                placeholder="Your Lastname *"
                name="lname"
              />
              <ErrorMessage
                name="lname"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="relative mb-6">
              <Field
                className="outline-none flex-1 pr-3 border caret-blue-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-blue-900 focus:border-[2px]"
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
            <div className="relative mb-6">
              <Field
                className="outline-none flex-1 pr-10 border caret-blue-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-blue-900 focus:border-[2px]"
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
                className="absolute top-1/2 right-[12px] transform -translate-y-1/2 text-gray-500 hover:text-blue-900"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <VisibilityOffIcon fontSize="small" />
                ) : (
                  <VisibilityIcon fontSize="small" />
                )}
              </button>
            </div>
            <button
              className="mb-6 w-full text-white bg-blue-900 transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue"}
            </button>
            <div className="flex gap-2">
              <p className="text-text text-gray-500">Already have an account?</p>
              <div
                className="text-blue-900 hover:opacity-70 hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                <p className="text-text">Sign in</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
