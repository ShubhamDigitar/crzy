import React from "react";
import logo from "../../public/logos/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className=" ">
      <footer className="bg-white border-2 border-t-[2px] rounded-t-lg px-2 md:px-4 lg:px-8 xl:px-20 2xl:px-36">
        <div className="mx-auto sm:px-2 ">
          <div className="lg:grid lg:grid-cols-2">
            <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
              <div className="block text-teal-600 lg:hidden">
                <Image src={logo} alt="Crazy Offers" height={60} />
              </div>

              <div className="mt-8 space-y-4 lg:mt-0">
                <span className="hidden h-1 w-10 rounded bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 lg:block"></span>

                <div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    Never Miss a Crazy Deal!
                  </h2>

                  <p className="mt-4 max-w-lg text-gray-500">
                    Unlock the best discounts from top stores worldwide.
                    Subscribe now and grab the hottest offers before they’re
                    gone!
                  </p>
                </div>

                <form className="mt-6 w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>

                  <div className="rounded-md  p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="tech@gmail.com"
                      className="w-full sm:text-sm outline-none"
                    />

                    <button className="mt-1 w-full rounded bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                      Get Alerts
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="py-8 lg:py-16 lg:pe-16">
              <div className="hidden text-blue-600 lg:block">
                <Image src={logo} alt="Crazy Offers" height={60} />
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-medium text-gray-900 relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500">
                    Top Categories
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Flash Sales
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Exclusive Coupons
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Free Shipping Deals
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Limited-Time Offers
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Holiday & Seasonal Discounts
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Partner with Us
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Global Deals Network
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900 relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500">Help & Support</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Contact Us
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        Live Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-8">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75"
                    >
                      {" "}
                      Cookies{" "}
                    </a>
                  </li>
                </ul>

                <p className="mt-8 text-xs text-gray-500">
                  &copy; 2025. CrazyOffers.in All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
