import Link from "next/link";
// import { pricingSectionFeatures } from "../configs/config";
import { pricingSectionFeatures } from "@/configs/config";

const Pricing = () => {
  return (
    <div className="p-2" id="pricing">
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex bg-black">
          <div className="flex-1 px-6 py-8 lg:p-12 bg-black relative border border-emerald-400/20">
            <h3 className="text-4xl font-extrabold text-white tracking-tight">
              Pro Version
            </h3>
            <p className="mt-6 text-lg text-gray-300">
              Take your Experience to the next level.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-1 border-t-2 border-emerald-400/30"></div>
              </div>
              <ul
                role="list"
                className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
              >
                {pricingSectionFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start lg:col-span-1 text-gray-300"
                  >
                    <svg
                      className="h-6 w-6 text-emerald-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="ml-3">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-gradient-to-r from-emerald-300 via-green-500 to-lime-300">
            <p className="text-lg leading-6 font-medium text-white">
              Pay once, own it forever
            </p>
            <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
              <span>$4.99</span>
              <span className="ml-3 text-xl font-medium text-white-50">
                USD
              </span>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="rounded-full shadow">
                <Link
                  href=""
                  target="_blank"
                  className="flex items-center justify-center px-8 py-4 bg-black text-base font-medium rounded-full text-white hover:bg-emerald-400 hover:text-black transition-colors duration-300"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
