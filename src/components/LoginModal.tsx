import Image from "next/image";
import React from "react";

const LoginModal = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleShowModal}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-xl mx-4"
        onClick={stopPropagation}
      >
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={handleShowModal}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <div className="p-6">
          <div className="text-center">
            <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
              Login to your account
            </p>
            <p className="mt-2 text-sm leading-4 text-slate-600">
              You must be logged in to perform this action.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-2">
            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <Image
                src="/api/placeholder/18/18"
                alt="GitHub"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              Continue with GitHub
            </button>

            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <Image
                src="/api/placeholder/18/18"
                alt="Google"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              Continue with Google
            </button>

            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <Image
                src="/api/placeholder/18/18"
                alt="LinkedIn"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              Continue with LinkedIn
            </button>
          </div>

          <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200"></div>
            OR
            <div className="h-px w-full bg-slate-200"></div>
          </div>

          <form className="w-full">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Email Address"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
              placeholder="Password"
            />
            <p className="mb-3 mt-2 text-sm text-gray-500">
              <a
                href="/forgot-password"
                className="text-blue-800 hover:text-blue-600"
              >
                Reset your password?
              </a>
            </p>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
            >
              Continue
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="font-medium text-[#4285f4]">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const ContactInfo = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <a href="#" className="flex items-center mb-6">
    <span className="w-8 h-8">{icon}</span>
    <h5 className="text-black text-base font-normal leading-6 ml-5">{text}</h5>
  </a>
);

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="mr-6">
    {icon}
  </a>
);

// Icon components
const PhoneIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.0683594" width="30" height="30" rx="15" fill="#337FFF" />
    <path
      d="M18.5094 15.937L18.9369 13.2236H16.3038V11.4599C16.3038 10.7179 16.6714 9.99293 17.8469 9.99293H19.0608V7.68231C18.3539 7.56968 17.6396 7.50874 16.9236 7.5C14.7565 7.5 13.3417 8.80158 13.3417 11.1546V13.2236H10.9395V15.937H13.3417V22.5H16.3038V15.937H18.5094Z"
      fill="white"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.0683594"
      width="30"
      height="30"
      rx="15"
      fill="url(#instagram-gradient)"
    />
    <defs>
      <linearGradient
        id="instagram-gradient"
        x1="29.4918"
        y1="30"
        x2="-0.50824"
        y2="-8.07516e-07"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBE18A" />
        <stop offset="0.21" stopColor="#FCBB45" />
        <stop offset="0.38" stopColor="#F75274" />
        <stop offset="0.52" stopColor="#D53692" />
        <stop offset="0.74" stopColor="#8F39CE" />
        <stop offset="1" stopColor="#5B4FE9" />
      </linearGradient>
    </defs>
    <path
      d="M12.2692 14.9998C12.2692 13.4919 13.492 12.2692 15.0008 12.2692C16.5096 12.2692 17.733 13.4919 17.733 14.9998C17.733 16.5077 16.5096 17.7304 15.0008 17.7304C13.492 17.7304 12.2692 16.5077 12.2692 14.9998Z"
      fill="white"
    />
  </svg>
);

export default LoginModal;
