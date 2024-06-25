"use client";
import { RootState } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignUpOpen, LogInOpen, SignUpClose } from "@/lib/features/LogInDialogSlice";

export default function LogIn() {
  const dispatch = useDispatch();
  const logInState = useSelector((state: RootState) => state.logInDialog.logInDialog);
  
  useEffect(() => {
    if (logInState === 'LogIn' || logInState === 'SignUp' ) {
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
        className={` top-0 right-0 left-0 bg-primary/90 h-screen shadow-lg px-4 py-2 sm:p-2 ${
          logInState ? "absolute" : "hidden"
        }`}
        // onClick={() => setOpen(false)}
      >
        <div
          onClick={handleChildClick}
          className={` h-full w-full overflow-hidden rounded-lg flex relative`}
        >
          <div className="w-full p-10 bg-background justify-between h-full flex flex-col lg:w-1/2">
            <div>
              <p className="text-primary font-bold text-xl mb-10">Log In</p>
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
              <p>Or sign in with</p>
              <div className="flex gap-3">
                <button className=" h-14 bg-background w-full rounded-lg border-border border ">
                  Google
                </button>
                <button className="h-14 bg-background w-full rounded-lg border-border border ">
                  Facebook
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-10 bg-background justify-between h-full flex flex-col lg:w-1/2">
            <div>
              <p className="text-primary font-bold text-xl mb-10">Log In</p>
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
              <p>Or sign in with</p>
              <div className="flex gap-3">
                <button className=" h-14 bg-background w-full rounded-lg border-border border ">
                  Google
                </button>
                <button className="h-14 bg-background w-full rounded-lg border-border border ">
                  Facebook
                </button>
              </div>
            </div>
          </div>
          <div
            className={`hidden absolute ${
              logInState === "LogIn" ? " translate-x-full" : "  translate-x-0"
            } lg:flex w-1/2 bg-secondary h-full transition-all duration-300 ease-in-out`}
          >
            dont have an account yet?
            <div 
              onClick={() =>
                dispatch(logInState === 'LogIn' ? SignUpOpen() : LogInOpen()) 
              }
              className="relative group cursor-pointer h-fit"
            >
              <p className="md:flex font-bold text-primary border-b-2 border-border ">
                Log In
              </p>
              <span className=" border-t group-hover:w-full duration-300 ease-out group-hover:border-trdbackground/100 border-trdbackground/0 w-[0px] top-6 absolute" />
            </div>
            <div onClick={() => dispatch(SignUpClose())}>close</div>
          </div>
        </div>
      </div>
    </div>
  );
}
