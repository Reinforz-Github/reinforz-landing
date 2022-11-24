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
          <div class='flex text-white pt-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='w-5 mr-2'
              viewBox='0 0 25 25'
              fill='currentColor'
            >
              <path d='M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z' />
            </svg>
            admin@reinforz.xyz
          </div>
          <div class='text-gray-500 pt-20'>
            ©️ 2022 Reinforz All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
