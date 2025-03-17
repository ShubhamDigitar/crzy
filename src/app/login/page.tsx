import React from "react";

const LoginForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 font-sans h-full md:min-h-screen p-4">
      <div className="grid justify-center max-w-md mx-auto">
        <div>
          <img
            src="https://readymadeui.com/login-image.webp"
            className="w-full object-cover rounded-2xl"
            alt="login"
          />
        </div>

        <form className="bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
          <div className="mb-12">
            <h3 className="text-3xl font-extrabold text-blue-600">Log in</h3>
          </div>

          <div className="relative flex items-center">
            <input
              name="email"
              type="text"
              required
              className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
              placeholder="Enter email"
            />
          </div>

          <div className="mt-6 relative flex items-center">
            <input
              name="password"
              type="password"
              required
              className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
              placeholder="Enter password"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Sign in
            </button>
            <p className="text-sm text-center mt-6">
              Don&apos;t have an account?
              <a href="#" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                Register here
              </a>
            </p>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="space-x-6 flex justify-center">
            <button type="button" className="border-none outline-none">
              <img src="/google-icon.svg" alt="Google" width={30} />
            </button>
            <button type="button" className="border-none outline-none">
              <img src="/apple-icon.svg" alt="Apple" width={30} />
            </button>
            <button type="button" className="border-none outline-none">
              <img src="/facebook-icon.svg" alt="Facebook" width={30} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
