"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header class="header top-0 left-0 z-50 h-auto w-full absolute bg-[#181818]">
      <div class="container mx-auto">
        <div class="header-inner flex items-center justify-between">
          <h1 className="text-white text-2xl">My Image Search</h1>
          <div class="header-mobilenav block lg:hidden">
            <button
              class="btn btn-small btn-transparent px-3 text-3xl"
              onClick={toggleMenu}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                </g>
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="header-nav lg:hidden absolute top-full left-0 w-full bg-[#36454F]">
              <nav className="px-5 text-center">
                <ul className="mb-0 inline-flex flex-col list-none gap-7 pl-0">
                  <li class="inline-block align-middle">
                    <a
                      href="profile"
                      class="text-white group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary !text-primary"
                    >
                      Light boxes
                      <span class="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li class="inline-block align-middle">
                    <a class="text-white group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                      Cart
                      <span class="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                  <li class="inline-block align-middle">
                    <a class="text-white group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                      Sign in
                      <span class="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          <div class="header-nav hidden lg:block">
            <nav class="flex-grow px-5 text-center">
              <ul class="mb-0 inline-flex list-none gap-7 pl-0">
                <li class="text-white inline-block align-middle">
                  <a class="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary !text-primary">
                    Light boxes
                    <span class="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                  </a>
                </li>
                <li class="text-white inline-block align-middle">
                  <a
                    href="#about"
                    class="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                  >
                    Cart
                    <span class="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                  </a>
                </li>
                <li class="text-white inline-block align-middle">
                  <a class="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
                    Sign in
                    <span class="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
