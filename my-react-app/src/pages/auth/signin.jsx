import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from '../../API/axiosConfig';
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Message } from 'primereact/message';

export function SignInUser() {
  const errRef = useRef(null);
  const successRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/user/login", { email, password, role }, { withCredentials: true });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/usersPg/CoursesPage");
      setSuccessMsg('Login Successful!');
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide success message after 3 seconds
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          setErrMsg('Missing Username or Password !!!');
        } else if (err.response.status === 401) {
          setErrMsg('Unauthorized !!!');
        } else {
          setErrMsg('Login Failed !!!');
        }
      } else {
        setErrMsg('No Server Response !!!');
      }
      errRef.current.show();
    }
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    if (selectedRole !== "Instructor" && selectedRole !== "Student") {
      setErrMsg('Role must be either "Instructor" or "Student"');
    } else {
      setErrMsg('');
    }
    setRole(selectedRole);
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography color="blue-gray" className="text-4xl font-bold mb-4">Sign In</Typography>
          <Typography color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-4 flex flex-col gap-4">
            <Typography color="blue-gray" className="mb-1 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography color="blue-gray" className="mb-1 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography color="blue-gray" className="mb-1 font-medium">
             Are you an Instructor or a Student ?
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Instructor or Student"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="role"
              name="role"
              value={role}
              onChange={handleRoleChange}
            />
          </div>
          <Button type="submit" className="mt-6 w-full">
            Sign In
          </Button>
          <div className="mt-4">
            {errMsg && (
              <div className="text-red-800">
                <Message ref={errRef} severity="error" text={errMsg} />
              </div>
            )}
            {showSuccess && (
              <div className="text-green-600">
                <Message ref={successRef} severity="success" text={successMsg} />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography color="blue-gray" className="flex items-center font-medium">
              <Link to="#" className="transition-colors hover:text-gray-900 underline">
                Forgot password
              </Link>
            </Typography>
          </div>
          <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md w-full">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button>
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Don't have an account?
            <Link to="/usersPg/signup" className="text-gray-900 ml-1">Sign up</Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Pattern"
        />
      </div>
    </section>
  );
}

export default SignInUser;