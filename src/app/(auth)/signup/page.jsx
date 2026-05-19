"use client";
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
import { redirect } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
const SignupPage = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [showConf, setShowConf] = useState(false);
    const isMatched=(passwordValue.trim().length>0 &&confrimPassword.trim().length>0)?passwordValue===confrimPassword?'matched':'not-matched':'';
  const onSubmit = async (formData) => {
    const userData = Object.fromEntries(formData.entries());
    if(isMatched==='not-matched'){

      return null;
    }
    setPasswordValue("")
    setConfirmPassword("")
    const { data, error } = await authClient.signUp.email(
      {
        name: userData.name,
        email: userData.email,
        image: userData.image,
        password: userData.password,
      },
      {
        onSuccess: () => {
          redirect("/signin")
        },
      },
    );
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Signup Successful!");
    }
    console.log("Data:",data)
    console.log("Error:",error)
  };
  // const handleGoogleLogin = async () => {
  //   const data = await authClient.signIn.social({
  //     provider: "google",
  //   });
  // };


  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[var(--background)] flex flex-col
    items-center justify-center px-4 py-14"
    >
      {/* HEADER */}

      <div className="relative z-10 text-center mb-8 space-y-3">
        <div className="inline-flex items-center rounded-full  bg-[#ff7a59]/10 px-4 text-sm font-medium text-[#ff7a59] ">
          🐾 Join PawNest Community
        </div>
        <h1 className="heading-font text-4xl md:text-5xl font-bold text-[#2d3748] dark:text-white ">
          Create Your
          <span className="gradient-text"> Account</span>
        </h1>
        <p className=" text-[var(--text-secondary)] ">
          Start your journey to help loving pets find their forever home.
        </p>
      </div>

      {/* FORM CARD */}

      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-4xl border bg-[var(--surface)] border-[var(--border-color)] shadow-2xl backdrop-blur-2xl">
        <div className="relative p-8">
          <Form action={onSubmit} className="flex flex-col w-full gap-4">
            {/* NAME */}
            <TextField
              isRequired
              className="form-field"
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label className="mb-2 text-sm font-medium text-[var(--text-primary)]">
                Full Name
              </Label>
              <Input
                className="input-field"
                placeholder="Enter your full name"
              />
              <FieldError className="text-red-500 text-sm" />
            </TextField>

            {/* PHOTO URL */}

            <TextField className="form-field" name="image" type="url">
              <Label className="mb-2 text-sm font-medium text-[var(--text-primary)]">
                Photo URL
              </Label>

              <Input className="input-field" placeholder="Enter photo URL" />
            </TextField>

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
              minLength={6}
              name="password"
              type={isShow ? "text" : "password"}
              validate={(value) => {
                if (value.length<6) {
                  return "Please use at least 6 characters";
                }
                if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(value)) {
                  return "Password must contain at least one uppercase and one lowercase";
                }

                return null;
              }}
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
            {/* Confirm Password */}
            <TextField
              className="relative form-field"
              isRequired
              name="confirmPassword"
              type={showConf ? "text" : "password"}
             
            >
              <Label className="mb-2 text-sm font-medium text-[var(--text-primary)]">
                Confirm Password
              </Label>

              <Input
                value={confrimPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field"
                placeholder="Enter confirm password"
              />

              {/* SHOW PASSWORD */}

              {confrimPassword.length > 0 && (
                <span className=" absolute  top-12 right-5 cursor-pointer text-[var(--text-primary)]">
                  {showConf ? (
                    <IoIosEye
                      size={20}
                      onClick={() => setShowConf(!showConf)}
                    />
                  ) : (
                    <IoIosEyeOff
                      size={20}
                      onClick={() => setShowConf(!showConf)}
                    />
                  )}
                </span>
              )}
              {isMatched==='matched'? (
                <p className="text-sm text-green-500">Password Matched!</p>
              ) :isMatched==='not-matched'? (
                <p className="text-sm text-red-500">Password not matched</p>
              ):<></>}
            </TextField>
            {/* BUTTONS */}

            <div className="flex flex-col gap-4 pt-2">
              {/* SIGN UP */}

              <Button
                type="submit"
                className="h-12 rounded-full bg-gradient-to-r from-[#ff7a59] to-[#ffd166] font-semibold text-white shadow-lg transition-all  duration-300
              hover:-translate-y-1 hover:shadow-xl"
              >
                Create Account
              </Button>

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
            Already have an account?{" "}
            <Link
              href="/signin"
              className=" font-semibold text-[#ff7a59] transition-colorshover:text-[#f26440]"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
