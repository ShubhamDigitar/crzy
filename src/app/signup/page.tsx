"use client";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import FormImg from "../../../public/formImg.png";
import googleIcon from "../../../public/google-icon.svg";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Image from "next/image";
import { FirebaseError } from 'firebase/app';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // Handle Firebase errors
  useEffect(() => {
    if (firebaseError) {
      const errorMessage = getFirebaseErrorMessage(firebaseError);
      setError(errorMessage);
    }
  }, [firebaseError]);

  // Function to get user-friendly error messages
  const getFirebaseErrorMessage = (error: FirebaseError) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please use a different email or try logging in.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/operation-not-allowed':
        return 'Email/password sign up is not enabled. Please contact support.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection and try again.';
      default:
        return 'An error occurred during sign up. Please try again.';
    }
  };

  // Password validation
  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  }, [password, confirmPassword]);

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPasswordError("");

    if (!validatePassword()) {
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(email, password);
      if (result) {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        // You might want to redirect or show a success message here
      }
    } catch (error) {
      // This catch block will handle any errors not caught by the useEffect handler
      if (error instanceof FirebaseError) {
        setError(getFirebaseErrorMessage(error));
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        console.log("Successfully signed in with Google");
        // Handle successful Google sign-in (e.g., redirect)
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(getFirebaseErrorMessage(error));
      } else {
        setError("Failed to sign in with Google. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <section>
      <div className="container py-8">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 ">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-gray-600 leading-6 lg:text-5xl">
                      Sign up
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Sign up and get crazy deals.</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-2">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="relative">
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    placeholder="Confirm password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {passwordError && (
                  <p className="text-red-600 text-sm mt-2">{passwordError}</p>
                )}

                {(error || googleError) && (
                  <p className="text-red-600 text-sm mt-2">
                    {error || (googleError && getFirebaseErrorMessage(googleError))}
                  </p>
                )}

                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="submit"
                    disabled={loading || googleLoading || !!passwordError}
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Signing up..." : "Sign up"}
                  </button>

                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={loading || googleLoading}
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-gray-600 transition duration-500 ease-in-out transform border border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  >
                    <Image src={googleIcon} alt="Google Icon" width={30} />
                    <span className="pl-2">
                      {googleLoading ? "Signing in..." : "Sign up with Google"}
                    </span>
                  </button>

                  <a
                    href="#"
                    className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-gray-600 focus:text-blue-600 sm:text-sm"
                  >
                    Forgot your Password?
                  </a>
                </div>
              </form>
            </div>
            <div className="order-first hidden w-full lg:block">
              <Image
                className="object-cover h-[80%] bg-cover rounded-l-lg"
                src={FormImg}
                alt="Sign up hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;