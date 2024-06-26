"use client";
import { RootState } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SignUpOpen,
  LogInOpen,
  SignUpClose,
} from "@/lib/features/LogInDialogSlice";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

export default function LogIn() {
  const dispatch = useDispatch();
  const logInState = useSelector(
    (state: RootState) => state.logInDialog.logInDialog
  );

  useEffect(() => {
    if (logInState === "LogIn" || logInState === "SignUp") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the effect when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [logInState]);

  const handleChildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <div className="">
      <div
        className={` top-0 right-0 left-0 bg-primary/90 h-screen shadow-lg px-4 py-2 sm:p-8 p-2 ${
          logInState ? "absolute" : "hidden"
        }`}
        // onClick={() => dispatch(SignUpClose())}
      >
        <div
          onClick={handleChildClick}
          className={` h-full w-full overflow-hidden rounded-lg flex  relative`}
        >
          {/* LogIn Tab */}

          <div
            className={`w-full p-10 bg-background justify-between h-full flex flex-col lg:w-1/2 ${
              logInState === "SignUp" ? "hidden" : ""
            }`}
          >
            <div>
              <div className="flex w-full justify-between mb-10">
                <p className="text-primary font-bold text-xl ">Log In</p>
                <div
                  className="lg:hidden rounded-lg cursor-pointer p-1 bg-red-300 hover:bg-red-400/70 duration-150 ease-out text-trdbackground text-xl"
                  onClick={() => dispatch(SignUpClose())}
                >
                  <FaXmark />
                </div>
              </div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full h-10 bg-input p-2 rounded-lg my-4"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-10 bg-input p-2 rounded-lg my-4"
              />
              <button className="w-full h-14 bg-primary text-secondary rounded-lg">
                Log In
              </button>
              <div className="flex justify-between mt-4">
                <div className="flex gap-2 cursor-pointer">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <label className="cursor-pointer" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <div className="relative group cursor-pointer">
                  <p className="md:flex font-bold text-primary border-b-2 border-border ">
                    Forget Password?
                  </p>
                  <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="w-full text-center mb-10">Or sign in with</p>
              <div className="flex gap-3">
                <button className=" h-14 bg-background w-full rounded-lg border-border border ">
                  Google
                </button>
                <button className="h-14 bg-background w-full rounded-lg border-border border ">
                  Facebook
                </button>
              </div>
            </div>
            <div className="flex gap-2 lg:hidden">
              <p>
                {logInState === "SignUp"
                  ? "already a member?"
                  : "dont have an account yet?"}
              </p>
              <div
                onClick={() =>
                  dispatch(logInState === "LogIn" ? SignUpOpen() : LogInOpen())
                }
                className="relative group cursor-pointer h-fit"
              >
                <p className="md:flex font-bold text-primary border-b-2 border-border ">
                  {logInState === "SignUp" ? "Log in" : "Sign Up"}
                </p>
                <span className=" border-t group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-[0px] top-6 absolute" />
              </div>
            </div>
          </div>

          {/* SignUp Tab */}

          <div
            className={`w-full p-10 bg-background justify-between h-full flex flex-col lg:w-1/2 absolute right-0 ${
              logInState === "LogIn" ? "hidden" : "translate-x-0"
            }`}
          >
            <div>
              <div className="flex w-full justify-between mb-10">
                <p className="text-primary font-bold text-xl ">Sign Up</p>
                <div
                  className="lg:hidden rounded-lg cursor-pointer p-1 bg-red-300 hover:bg-red-400/70 duration-150 ease-out text-trdbackground text-xl"
                  onClick={() => dispatch(SignUpClose())}
                >
                  <FaXmark />
                </div>
              </div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                className="w-full h-10 bg-input p-2 rounded-lg my-4"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full h-10 bg-input p-2 rounded-lg my-4"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full h-10 bg-input p-2 rounded-lg my-4"
              />
              <label htmlFor="confirmPass">Confirm Password</label>
              <input
                type="password"
                name="confirmPass"
                placeholder="Confirm Password"
                className="w-full h-10 bg-input p-2 rounded-lg my-4"
              />
              <button className="w-full h-14 bg-primary text-secondary rounded-lg">
                Log In
              </button>
              <div className="flex justify-between mt-4">
                <div className="flex gap-2 cursor-pointer">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <label className="cursor-pointer" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <div className="relative group cursor-pointer">
                  {/* <p className="md:flex font-bold text-primary border-b-2 border-border ">
                    Forget Password?
                  </p> */}
                  <div className="border group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-0 bottom-0 absolute"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="w-full text-center mb-10">Or sign in with</p>
              <div className="flex gap-3">
                <button className=" h-14 bg-background w-full rounded-lg border-border border ">
                  Google
                </button>
                <button className="h-14 bg-background w-full rounded-lg border-border border ">
                  Facebook
                </button>
              </div>
            </div>
            <div className="flex gap-2 lg:hidden">
              <p>
                {logInState === "SignUp"
                  ? "already a member?"
                  : "dont have an account yet?"}
              </p>
              <div
                onClick={() =>
                  dispatch(logInState === "LogIn" ? SignUpOpen() : LogInOpen())
                }
                className="relative group cursor-pointer h-fit"
              >
                <p className="md:flex font-bold text-primary border-b-2 border-border ">
                  {logInState === "SignUp" ? "Log in" : "Sign Up"}
                </p>
                <span className=" border-t group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-[0px] top-6 absolute" />
              </div>
            </div>
          </div>
          <div
            className={`hidden absolute ${
              logInState === "LogIn" ? " translate-x-full" : "  translate-x-0"
            } lg:flex w-1/2 bg-secondary h-full transition-all duration-300 ease-in`}
          >
            <div className="flex flex-col justify-between w-full p-10">
              <div
                className="absolute right-10 top-10 rounded-lg cursor-pointer p-1 bg-red-300 hover:bg-red-400/70 duration-150 ease-out text-trdbackground text-xl"
                onClick={() => dispatch(SignUpClose())}
              >
                <FaXmark />
              </div>
              <h1 className="text-1xl xs:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-primary text-center mt-6 mb-6">
                Welcome
              </h1>
              <div className="flex items-center justify-center">
                <h1 className="text-3xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary text-center mt-6 mb-6">
                  Matjarify Stores
                </h1>
                <div className="h-20 w-20 relative">
                  <Image src={"/MatjarifyStoresLogo.png"} alt="Matjary" fill />
                </div>
              </div>
              <div className="flex gap-2">
                <p>
                  {logInState === "SignUp"
                    ? "already a member?"
                    : "dont have an account yet?"}
                </p>
                <div
                  onClick={() =>
                    dispatch(
                      logInState === "LogIn" ? SignUpOpen() : LogInOpen()
                    )
                  }
                  className="relative group cursor-pointer h-fit"
                >
                  <p className="md:flex font-bold text-primary border-b-2 border-border ">
                    {logInState === "SignUp" ? "Log in" : "Sign Up"}
                  </p>
                  <span className=" border-t group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-[0px] top-6 absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
