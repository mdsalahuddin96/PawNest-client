"use client";
import { SubmitButton } from "@/components/SubmitBtn";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
const SigninPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  const onSubmit = async (formData) => {
    const userData = Object.fromEntries(formData);
    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
      rememberMe: true,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login Successful!");
    }
  };
  // const handleGoogleLogin = async () => {
  //   const data = await authClient.signIn.social({
  //     provider: "google",
  //   });
  // };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] flex flex-col items-center justify-center px-4 py-10">
      {/* HEADER */}

      <div className="relative z-10 text-center mb-8 space-y-2">
        <h1 className="heading-font text-4xl md:text-5xl font-bold text-[#2d3748] dark:text-white ">
          Welcome to
          <span className="gradient-text"> PawNest 🐾</span>
        </h1>
        <p className=" text-[var(--text-secondary)] ">
          Reconnect with your furry friends and continue exploring adorable
          pets.
        </p>
      </div>

      {/* FORM CARD */}

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-4xl border bg-[var(--surface)] border-[var(--border-color)] shadow-2xl backdrop-blur-2xl">
        <div className="relative p-8">
          <Form action={onSubmit} className="flex flex-col w-full gap-4">
            {/* EMAIL */}
            <TextField
              className="form-field"
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="mb-2 text-sm font-medium text-[var(--text-primary)]">
                Email Address
              </Label>

              <Input className="input-field" placeholder="Enter your email" />

              <FieldError className="text-red-500 text-sm" />
            </TextField>

            {/* PASSWORD */}

            <TextField
              className="relative form-field"
              isRequired
              name="password"
              type={isShow ? "text" : "password"}
             
            >
              <Label className="mb-2 text-sm font-medium text-[var(--text-primary)]">
                Password
              </Label>

              <Input
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                className="input-field"
                placeholder="Enter your password"
              />

              {/* SHOW PASSWORD */}

              {passwordValue.length > 0 && (
                <span className=" absolute  top-12 right-5 cursor-pointer text-[var(--text-primary)]">
                  {isShow ? (
                    <IoIosEye size={20} onClick={() => setIsShow(!isShow)} />
                  ) : (
                    <IoIosEyeOff size={20} onClick={() => setIsShow(!isShow)} />
                  )}
                </span>
              )}
              <FieldError className="text-red-500 text-sm" />
            </TextField>

            {/* BUTTONS */}

            <div className="flex flex-col gap-4 pt-2">
              {/* SIGN UP */}
              <SubmitButton text="Sign In"/>

              {/* DIVIDER */}

              <div className="flex items-center gap-3">
                <Separator className="flex-1 text-gray-300" />

                <span className=" text-sm text-muted">Or continue with</span>

                <Separator className="flex-1 text-gray-300" />
              </div>

              {/* GOOGLE BUTTON */}

              <Button
                variant="bordered"
                className="h-12 rounded-full border border-[#ff7a59]/20 bg-[var(--surface)] font-medium text-[var(--text-primary)] backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#fff1e6]
              dark:hover:bg-[#243244]
              flex items-center justify-center gap-1.5
            "
              >
                <FcGoogle size={22} />
                Continue with Google
              </Button>
            </div>
          </Form>

          {/* FOOTER */}

          <p className=" mt-8 text-center text-sm text-[var(--text-secondary)]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className=" font-semibold text-[#ff7a59] transition-colorshover:text-[#f26440]"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
