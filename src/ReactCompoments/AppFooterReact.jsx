import React from 'react';
import { footerLinks, footerSocialLinks } from '../constants/constants';

export const AppFooterReact = () => {
  return (
    <footer class='py-20 bg-gray-3'>
      <div class='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div class='flex flex-col items-center'>
          <div class='m-auto w-8/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex md:flex-col justify-between md:justify-center items-center'>
            <div class='flex items-center justify-center text-white sm:w-7/12 md:justify-center'>
              <ul
                role='list'
                class='md:space-x-8 md:space-y-0 space-y-5 list md:flex'
              >
                {footerLinks.map((footer) => (
                  <li>
                    <a href={footer.link} class='transition hover:text-primary'>
                      {footer.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class='hidden invisible md:visible min-w-full py-2 border-b-2 border-gray-800 sm:flex justify'></div>
            <div class='flex mt-4 items-center justify-center text-white'>
              <ul
                role='list'
                class='md:space-x-8 list md:space-y-0 space-y-5 md:flex'
              >
                {footerSocialLinks.map((social) => (
                  <li>
                    <a
                      href={social.link}
                      target='_blank'
                      class='flex items-center space-x-3 transition hover:text-primary'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        class='w-5'
                        viewBox={
                          social.title !== 'LinkedIn'
                            ? '0 0 16 16'
                            : '0 0 30 30'
                        }
                      >
                        <path d={social.svgPath}></path>
                      </svg>
                      <span>{social.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class='text-gray-500 pt-20'>
            ©️ 2022 Reinforz All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
